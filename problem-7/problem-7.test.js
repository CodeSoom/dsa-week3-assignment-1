const heapSort = (array) => {
};

test.each([
  [[undefined, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]],
  [[undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  [[undefined, 9, 11, 6, 8, 7, 2, 3, 4, 1, 10, 5]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  heapSort(array);

  expect(array)
    .toEqual([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
