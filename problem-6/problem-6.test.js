const partition = (array, start, end) => {
  let left = start + 1;
  let right = end;

  const pivot = array[start];

  while (true) {
    while (array[left] < pivot) {
      if (left === end) {
        break;
      }

      left++;
    }

    while (pivot < array[right]) {
      if (right === start) {
        break;
      }

      right--;
    }

    if (left >= right) {
      break;
    }

    [array[left], array[right]] = [array[right], array[left]];
  }

  [array[start], array[right]] = [array[right], array[start]];
  return right;
};

const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return;
  }

  const j = partition(array, start, end);
  quickSort(array, start, j - 1);
  quickSort(array, j + 1, end);
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
