const selectionSort = (array) => {
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  selectionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
