const exchange = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const isFirstLesserThanSecond = (a, b) => a < b;
const insertionSort = (array) => {
  for (let currentIndex = 1; currentIndex < array.length; currentIndex++) {
    for (let comparisonIndex = currentIndex; comparisonIndex > 0; comparisonIndex--) {
      if (isFirstLesserThanSecond(array[comparisonIndex], array[comparisonIndex - 1])) {
        exchange(array, comparisonIndex, comparisonIndex - 1);
      } else {
        // todo: 비교했을 때 왼쪽보다 작지 않다면 비교를 중지하고, 다음 index 로 넘어간다.
        break;
      }
    }
  }
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  insertionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
