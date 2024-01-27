const exchange = (array, a, b) => {
  [array[b], array[a]] = [array[a], array[b]];
};

/**
 * 1. 하나의 배열에 대해서 퀵 정렬을 실행
 * 2. pivot의 위치를 결정한다
 * 3. pivot의 위치를 기준으로 왼쪽, 오른쪽 부분 배열을 만든다
 * 4. 왼쪽, 오른쪽 부분 배열에 대해서 퀵 정렬을 실행한다
 */
const quickSort = (array, start, end) => {
  const startIndex = start || 0;
  const endIndex = end || array.length - 1;

  const length = endIndex - startIndex + 1;

  if (length <= 1) {
    return;
  }

  const pivot = array[startIndex];

  let left = startIndex;
  let right = endIndex;

  while (right > left) {
    for (left; left <= endIndex; left++) {
      if (pivot < array[left]) {
        break;
      }
    }

    if (left > endIndex) {
      left = endIndex;
    }

    for (right; right >= startIndex; right--) {
      if (pivot >= array[right]) {
        break;
      }
    }

    if (right < startIndex) {
      right = startIndex;
    }

    if (right <= left) {
      break;
    }

    exchange(array, left, right);
  }

  const pivotIndex = right;

  exchange(array, pivotIndex, startIndex);

  // 왼쪽 배열
  if (pivotIndex - 1 >= startIndex) {
    quickSort(array, startIndex, pivotIndex - 1);
  }

  // 오른쪽 배열
  if (pivotIndex + 1 <= endIndex) {
    quickSort(array, pivotIndex + 1, endIndex);
  }
};

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[3, 5, 6, 8, 1, 2, 4, 7]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  quickSort(array);

  expect(array)
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
