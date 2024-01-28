const exchange = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

const less = (a, b) => a < b;

const sink = (array, i, N) => {
  while (2 * i <= N) {
    let j = 2 * i;
    if (j < N && less(array[j], array[j + 1])) {
      j++;
    }

    if (!less(array[i], array[j])) {
      break;
    }

    exchange(array, i, j);
    i = j;
  }
};

const heapSort = (array) => {
  let N = array.length - 1;

  for (let i = Math.floor(N / 2); i >= 1; i--) {
    sink(array, i, N);
  }

  while (N > 1) {
    exchange(array, 1, N);
    N--;
    sink(array, 1, N);
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
