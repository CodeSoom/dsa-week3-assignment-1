/*
1. 다음은 퀵 정렬의 알고리즘입니다. 알고리즘을 보고 다음 값이 주어졌을 때
   어떻게 정렬이 되는지 그림으로 그려보세요.

> 힙 구성: 입력 배열을 최대 힙 구조로 만듭니다.
> 정렬취합: 힙에서 가장 큰 원소(루트)를 배열의 마지막 원소와 바꾸고 힙 크기를
> 줄입니다. 이후, 바뀐 루트를 제외하고 다시 힙 속성을 복원합니다. 이 과정을 힙이
> 빌 때까지 반복합니다.

```
3, 5, 6, 8, 1, 2, 4, 7
```

2. 퀵 정렬의 코드를 보고 어떻게 동작하는지 그림을 그려보세요. 마찬가지로 위의 값이 주어졌다고 했을 때 코드를 따라가며 그림을 그려가며 이해해 보세요.

3. 퀵 정렬의 코드를 직접 구현해 주세요.

*/

//퀵 정렬은 시간이 부족해 이해만 하고 넘어갔습니다
const exchange = (array, a, b) => {
  [array[b], array[a]] = [array[a], array[b]];
};

const compare = (array, a, b) => array[a] < array[b];

const sink = (array, i, N) => {
  while (2 * i <= N) {
    let j = 2 * i;
    if (j < N && compare(array, j, j + 1)) {
      j++;
    }

    if (!compare(array, i, j)) {
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
])("주어진 배열을 오름차순으로 정렬한다", (array) => {
  heapSort(array);

  expect(array).toEqual([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
