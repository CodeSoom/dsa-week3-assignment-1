const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  selectionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
