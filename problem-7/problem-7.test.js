const sink = (array, i, len) => {
  while (2 * i <= len) {
    let j = 2 * i;

    if (j < len && array[j] < array[j + 1]) {
      j++;
    }

    if (!(array[i] < array[j])) {
      break;
    }

    [array[i], array[j]] = [array[j], array[i]];
    i = j;
  }
};

const heapSort = (array) => {
  let len = array.length - 1;

  for (let i = Math.floor(len / 2); i >= 1; i--) {
    sink(array, i, len);
  }

  while (len > 1) {
    [array[1], array[len]] = [array[len], array[1]];
    len--;
    sink(array, 1, len);
  }
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
