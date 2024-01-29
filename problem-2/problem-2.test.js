const exchange = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const isFirstLesserThanSecond = (a, b) => a < b;

const findMinValueIndex = (array, startIndex) => {
  let minValueIndex = startIndex;

  for (let index = startIndex + 1; index < array.length; index++) {
    if (isFirstLesserThanSecond(array[index], array[minValueIndex])) {
      minValueIndex = index;
    }
  }

  return minValueIndex;
};

const selectionSort = (array) => {
  for (let index = 0; index < array.length - 1; index++) {
    const minValueIndex = findMinValueIndex(array, index);

    exchange(array, index, minValueIndex);
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
