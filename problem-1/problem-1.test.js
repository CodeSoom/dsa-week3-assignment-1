const exchange = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const isFirstBiggerThanSecond = (a, b) => a > b;
const bubbleSort = (array) => {
  const { length } = array;

  for (let pass = 1; pass <= length; pass++) {
    let exchangeCount = 0;

    for (let index = 0; index < length - pass; index++) {
      if (isFirstBiggerThanSecond(array[index], array[index + 1])) {
        exchange(array, index, index + 1);
        exchangeCount++;
      }
    }

    // todo : 정렬이 완료됐다면 loop 를 종료한다.
    if (exchangeCount === 0) {
      break;
    }
  }
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  bubbleSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
