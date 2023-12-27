const merge = (array, start, mid, end) => {
  let left = start;
  let right = mid + 1;

  const temp = [...array];

  for (let i = start; i <= end; i++) {
    if (left > mid) {
      array[i] = temp[right++];
    } else if (right > end) {
      array[i] = temp[left++];
    } else if (temp[left] < temp[right]) {
      array[i] = temp[left++];
    } else {
      array[i] = temp[right++];
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

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[8, 2, 1, 5, 3, 4, 7, 6]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  mergeSort(array);

  expect(array)
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('홀수 개 배열에 대해서도 오름차순으로 정렬한다', () => {
  const array = [8, 2, 1, 9, 5, 3, 11, 4, 7, 10, 6];

  mergeSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
