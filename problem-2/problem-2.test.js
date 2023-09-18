const exchange = (list, a,b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const findMinIndex = (list, startIndex) => {
  let min = startIndex;

  for (let j = startIndex + 1; j < list.length; j++) {
    if (less(list[j], list[min])) {
      min = j;
    }
  }
  return min;
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const minIndex = findMinIndex(array, i);

    exchange(array, i, minIndex);
  }
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  selectionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
