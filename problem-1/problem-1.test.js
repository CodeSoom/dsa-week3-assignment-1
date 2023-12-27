const bubbleSort = (array) => {
  const len = array.length;

  for (let i = 0; i < len; i++) {
    let isChanged = false;
    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        isChanged = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }

    if (!isChanged) {
      return array;
    }
  }

  return array;
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  bubbleSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
