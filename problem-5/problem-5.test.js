const isFirstLesserThanSecond = (a, b) => a < b;
const merge = (list, start, mid, end) => {
  let left = start;
  let right = mid + 1;

  const temp = [...list];

  for (let index = start; index <= end; index++) {
    if (left > mid) { // 왼쪽의 정렬이 모두 끝났는가? -> 오른쪽 항목들을 채운다.
      list[index] = temp[right];
      right++;
    } else if (right > end) { // 오른쪽의 정렬이 모두 끝났는가? -> 왼쪽 항목들을 채운다.
      list[index] = temp[left];
      left++;
    } else if (isFirstLesserThanSecond(temp[left], temp[right])) {
      // 왼쪽과 오른쪽의 항목 중 왼쪽 값이 더 작으면 넣는다.
      list[index] = temp[left];
      left++;
    } else {
      // 왼쪽과 오른쪽의 항목 중 오른쪽 값이 더 작으면 넣는다.
      list[index] = temp[right];
      right++;
    }
  }
};

const mergeSort = (list, start = 0, end = list.length - 1) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(list, start, mid); // 절반으로 나눈 왼쪽 리스트를 정렬
  mergeSort(list, mid + 1, end); // 절반으로 나눈 오른쪽 리스트를 정렬
  merge(list, start, mid, end);
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
