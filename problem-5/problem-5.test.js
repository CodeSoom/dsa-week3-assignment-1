const merge = (array, start, mid, end) => {
  let left = start,
      right = mid + 1;

  const copyArray = [...array];

  for(let i = start; i <= end; i++){
    if(left > mid){ // 오른쪽 요소로 이동
      array[i] = copyArray[right];
      right++;
    }else if(right > end){ // 왼쪽 요소로 이동
      array[i] = copyArray[left];
      left++;
    }else if(copyArray[left] < copyArray[right]){ // 왼쪽과 오른쪽 요소 중 왼쪽 값이 더 작을 경우
      array[i] = copyArray[left];
      left++;
    }else{
      array[i] = copyArray[right]; // 왼쪽과 오른쪽 요소 중 오른쪽 값이 더 작을 경우..
      right++;
    }
  }
}

const mergeSort = (array, start = 0, end = array.length - 1) => {
  if(start >= end) return;

  const mid = Math.floor((start + end) / 2)

  mergeSort(array, start, mid); // 분할한 배열 왼쪽 리스트 정렬
  mergeSort(array, mid + 1, end); // 분할한 배열 오른쪽 리스트 정렬
  merge(array, start, mid, end);
};

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[8, 2, 1, 5, 3, 4, 7, 6]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  mergeSort(array);

  expect(array)
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('홀수 개 배열에 대해서도 오름차순으로 정렬한다', () => {
  const array = [8, 2, 1, 9, 5, 3, 11, 4, 7, 10, 6];

  mergeSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
