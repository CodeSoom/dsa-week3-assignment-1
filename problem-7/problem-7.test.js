const exchange = (array, a, b) => {
  [array[b], array[a]] = [array[a], array[b]];
};

const less = (a, b) => a < b;

const sink = (array, i, N) => {
  // 자식 노드가 있을 때까지 반복
  while (2 * i <= N) {
    // 왼쪽 자식 노드부터 탐색
    let j = 2 * i;

    // 오른쪽 자식 노드가 더 클 경우
    if (j < N && less(array[j], array[j + 1])) {
      j++;
    }

    // 더 이상 정렬할 필요가 없을 경우
    if (!less(array[i], array[j])) {
      break;
    }

    exchange(array, i, j);

    // 자식 노드로 이동
    i = j;
  }
};

const heapSort = (array) => {
  let N = array.length - 1;

  for (let i = Math.floor(N / 2); i >= 1; i--) {
    sink(array, i, N);
  }

  while (N > 1) {
    // 루트 노드와 제일 마지막 노드 교환
    exchange(array, 1, N);

    // 마지막 노드는 정렬되었으니 sync할 항목에서 제외
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
