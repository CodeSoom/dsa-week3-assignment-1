/*
1. 다음은 퀵 정렬의 알고리즘입니다. 알고리즘을 보고 다음 값이 주어졌을 때
   어떻게 정렬이 되는지 그림으로 그려보세요.

> 1. 임의의 항목을 분할 기준 항목으로 선택한다
> 2. 배열의 왼쪽 끝부터 기준보다 크거나 같은 항목을 만날때까지 스캔한다
> 3. 배열의 오른쪽 끝부터 스캔하면서 기준보다 작거나 같은 항목을 만날때까지 스캔한다
> 4. 찾은 두 값을 교환한다. 그런데 만약 인덱스가 교차하면 왼쪽 항목들 중에서 가장 오른쪽에 있는 항목과 교환한다.
> 5. 기준 항목 왼쪽과 오른쪽을 위 내용을 반복한다

```
3, 5, 6, 8, 1, 2, 4, 7
```
[3, 5, 6, 8, 1, 2, 4, 7] 
 ↑(기준)
[3, 5, 6, 8, 1, 2, 4, 7]
    ↑           ↑                
[3, 2, 6, 8, 1, 5, 4, 7]
       ↑     ↑
[3, 2, 1, 8, 6, 5, 4, 7] //인덱스 교차
       ↑  ↑
[1, 2, 3, 8, 6, 5, 4, 7] //1, 2, 3 픽스
    ↑↑
[1, 2, 3, 8, 6, 5, 4, 7]
          ↑(기준)
[1, 2, 3, 8, 6, 5, 4, 7] //인덱스 교차
             ↑        ↑ 
[1, 2, 3, 7, 6, 5, 4, 8] //8 픽스

[1, 2, 3, 7, 6, 5, 4, 8] 
          ↑(기준)
[1, 2, 3, 7, 6, 5, 4, 8] //인덱스 교차
                   ↑↑
[1, 2, 3, 4, 6, 5, 7, 8] // 7 픽스

[1, 2, 3, 4, 6, 5, 7, 8] // 4 픽스

[1, 2, 3, 4, 6, 5, 7, 8] 
             ↑(기준)
[1, 2, 3, 4, 6, 5, 7, 8] 
                ↑↑
[1, 2, 3, 4, 5, 6, 7, 8] //5픽스, 이후 6픽스
                
2. 퀵 정렬의 코드를 보고 어떻게 동작하는지 그림을 그려보세요. 마찬가지로 위의 값이 주어졌다고 했을 때 코드를 따라가며 그림을 그려가며 이해해 보세요.

3. 퀵 정렬의 코드를 직접 구현해 주세요.
*/

const pivot = (array, start = 0, end = array.length - 1) => {
  const exchange = (array, a, b) => {
    [array[b], array[a]] = [array[a], array[b]];
  };

  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      exchange(array, swapIndex, i);
    }
  }

  exchange(array, start, swapIndex);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    quickSort(array, left, pivotIndex - 1);

    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};
test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[3, 5, 6, 8, 1, 2, 4, 7]],
])("주어진 배열을 오름차순으로 정렬한다", (array) => {
  const newArray = quickSort(array);

  expect(newArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
