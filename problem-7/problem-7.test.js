const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

const sink = (array, i, N) => {
  while (2 * i <= N) {
    let j = 2 * i;
    if (j < N && array[j] < array[j + 1]) {
      j++;
    }

    if (array[i] >= array[j]) {
      break;
    }

    swap(array, i, j);
    i = j;
  }
};

const heapSort = (array) => {
  let N = array.length - 1;

  for (let i = Math.floor(N / 2); i >= 1; i--) {
    sink(array, i, N);
  }

  while (N > 1) {
    swap(array, 1, N); // 가장 큰 요소를 힙의 끝으로 보낸다.
    N--; // 힙의 크기를 줄인다.
    sink(array, 1, N); // 힙을 복원한다.
    // 이 과정에서 가장 끝부터 정렬된다.
  }
};

test.each([
  [[undefined, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]],
  [[undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  [[undefined, 9, 11, 6, 8, 7, 2, 3, 4, 1, 10, 5]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  heapSort(array);

  expect(array).toEqual([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
