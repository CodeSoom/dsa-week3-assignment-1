const exchange = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const isFirstLesserThanSecond = (a, b) => a < b;

const shellSort = (array) => {
  const { length } = array;

  let gap = Math.floor(length / 2);

  while (gap > 0) {
    for (let index = gap; index < length; index++) {
      for (let previousIndex = index; previousIndex >= 0; previousIndex = previousIndex - gap) {
        if (isFirstLesserThanSecond(array[previousIndex], array[previousIndex - gap])) {
          exchange(array, previousIndex, previousIndex - gap);
        } else {
          break;
        }
      }
    }

    gap = Math.floor(gap / 2);
  }
};

test.each([
  [[24, 20, 19, 19, 18, 16, 15, 13, 12, 12, 12, 8, 5, 5, 5, 1]],
  [[1, 5, 5, 5, 8, 12, 12, 12, 13, 15, 16, 18, 19, 19, 20, 24]],
  [[19, 8, 5, 12, 12, 19, 15, 18, 20, 5, 24, 1, 13, 16, 12, 5]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  shellSort(array);

  expect(array)
    .toEqual([1, 5, 5, 5, 8, 12, 12, 12, 13, 15, 16, 18, 19, 19, 20, 24]);
});
