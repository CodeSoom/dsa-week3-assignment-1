const merge = (array, start, mid, end) => {
  let left = start;
  let right = mid + 1;

  const temp = [...array];

  for (let i = start; i <= end; i++) {
    if (left > mid) {
      array[i] = temp[right];
      right++;
    } else if (right > end) {
      array[i] = temp[left];
      left++;
    } else if (temp[left] < temp[right]) {
      array[i] = temp[left];
      left++;
    } else {
      array[i] = temp[right];
      right++;
    }
  }
};

const mergeSort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  merge(array, start, mid, end);
};

const mergeSortBottomUp = (array) => {
  const { length } = array;

  for (let n = 1; n < length; n = n * 2) {
    for (let start = 0; start < length - n; start = start + n * 2) {
      merge(
        array,
        start,
        start + (n - 1),
        Math.min(start + (n * 2 - 1), length - 1)
      );
    }
  }
};

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[8, 2, 1, 5, 3, 4, 7, 6]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  const array1 = [...array];
  const array2 = [...array];
  mergeSort(array1);
  mergeSortBottomUp(array2);

  expect(array1).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(array2).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('홀수 개 배열에 대해서도 오름차순으로 정렬한다', () => {
  const array = [8, 2, 1, 9, 5, 3, 11, 4, 7, 10, 6];

  mergeSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
