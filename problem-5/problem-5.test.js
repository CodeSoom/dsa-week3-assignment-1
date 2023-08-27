/*
1. 다음은 머지 정렬의 알고리즘입니다. 알고리즘을 보고 다음 값이 주어졌을 때
   어떻게 정렬이 되는지 그림으로 그려보세요.

> 1. 리스트의 길이가 1 또는 0이면 이미 정렬된 것으로 간주하고 반환합니다.
> 2. 리스트를 반으로 나눠서 각각을 재귀적으로 머지 정렬합니다.
> 3. 두 개의 정렬된 반쪽 리스트를 병합(merge)하여 하나의 정렬된 리스트로 만듭니다.

```
8, 2, 1, 5, 3, 4, 7, 6
```
[8, 2, 1, 5, 3, 4, 7, 6]
->
[8, 2, 1, 5] [3, 4, 7, 6]
->
[8, 2] [1, 5] [3, 4] [7, 6]
->
[8] [2] [1] [5] [3] [4] [7] [6]
->
[2, 8] [1, 5] [3, 4] [6, 7]
->
[1, 2, 5, 8] [3, 4, 6, 7]
->
[1, 2, 3, 4, 5, 6, 7, 8]
2. 머지 정렬의 코드를 보고 어떻게 동작하는지 그림을 그려보세요. 마찬가지로 위의 값이 주어졌다고 했을 때 코드를 따라가며 그림을 그려가며 이해해 보세요.

3. 머지 정렬의 코드를 직접 구현해 주세요.

*/
const compare = (array, a, b) => array[a] < array[b];

const mergeSort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  merge(array, start, mid, end);
};

const merge = (array, start, mid, end) => {
  let left = start;
  let right = mid + 1;

  const temp = [...array];

  for (let i = start; i <= end; i++) {
    if (left > mid) {
      array[i] = temp[right];
      right++;
    } else if (right > end) {
      array[i] = temp[left];
      left++;
    } else if (compare(temp, left, right)) {
      array[i] = temp[left];
      left++;
    } else {
      array[i] = temp[right];
      right++;
    }
  }
};

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[8, 2, 1, 5, 3, 4, 7, 6]],
])("주어진 배열을 오름차순으로 정렬한다", (array) => {
  mergeSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("홀수 개 배열에 대해서도 오름차순으로 정렬한다", () => {
  const array = [8, 2, 1, 9, 5, 3, 11, 4, 7, 10, 6];

  mergeSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
