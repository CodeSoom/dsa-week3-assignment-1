const bubbleSort = (array) => {
  let exchangeCount = 0;

  // i = 정렬이 완료될 원소의 개수
  // 첫 패스 때 1개의 정렬이 완료됨
  // 마지막 패스 때 array.length - 1개의 원소가 정렬됨
  // array.length - 1개가 원소가 정렬되면 마지막 원소는 정렬할 필요가 없다.
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        exchangeCount += 1;

        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }

    if (i === 0 && exchangeCount === 0) {
      return;
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
