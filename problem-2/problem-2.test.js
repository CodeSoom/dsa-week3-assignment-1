/*
1. 다음은 선택 정렬의 알고리즘입니다. 알고리즘을 보고 다음 값이 주어졌을 때
   어떻게 정렬이 되는지 그림으로 그려보세요.

> 1. 배열 안에서 가장 작은 항목을 찾는다
> 2. 그 항목을 가장 첫 항목과 자리를 바꾼다
> 3. 다음 번 작은 항목을 찾아 두 번째 항목과 자리를 바꾼다
> 4. 모든 배열이 정렬될 때 까지 반복한다.

``` 
- 4,
  2,
  1,
  5,
  3```


[4, 2, 1, 5, 3]  ->  [1, 2, 4, 5, 3]  ->  [1, 2, 4, 5, 3]  ->  [1, 2, 3, 5, 4]  ->  [1, 2, 3, 4, 5]

2. 선택 정렬의 코드를 보고 어떻게 동작하는지 그림을 그려보세요. 마찬가지로 위의 값이 주어졌다고 했을 때 코드를 따라가며 그림을 그려가며 이해해 보세요.

3. 선택 정렬의 코드를 직접 구현해 주세요.
*/

const exchange = (array, a, b) => {
  [array[b], array[a]] = [array[a], array[b]];
};

const compare = (array, a, b) => array[a] < array[b];

const findMinIndex = (array, startIndex) => {
  let minIndex = startIndex;

  for (let i = startIndex + 1; i < array.length; i++) {
    if (compare(array, i, minIndex)) {
      minIndex = i;
    }
  }
  return minIndex;
};

const selectionSort = (array) => {
  for (let j = 0; j < array.length - 1; j++) {
    exchange(array, j, findMinIndex(array, j));
  }
};

test.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 5]], [[4, 2, 1, 5, 3]]])(
  "주어진 배열을 오름차순으로 정렬한다",
  (array) => {
    selectionSort(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  }
);
