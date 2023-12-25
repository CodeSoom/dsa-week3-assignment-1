const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const partition = (array, lo, hi) => {
  let left = lo + 1;
  let right = hi;

  const pivot = array[lo];

  while (true) {
    while (array[left] < pivot) {
      if (left === hi) {
        break;
      }

      left++;
    }

    while (pivot < array[right]) {
      if (right === lo) {
        break;
      }

      right--;
    }

    if (left >= right) {
      break;
    }

    swap(array, left, right);
  }

  swap(array, lo, right);
  return right;
};

const sort = (array, lo, hi) => {
  if (lo >= hi) {
    return;
  }

  const j = partition(array, lo, hi); // j는 pivot의 위치이고, 이것을 기준으로 왼쪽과 오른쪽을 나누고 정렬한다. partition에서 swap을 통해 정렬이 이루어진다.
  sort(array, lo, j - 1);
  sort(array, j + 1, hi);
};

const quickSort = (array) => {
  sort(array, 0, array.length - 1);
};

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[3, 5, 6, 8, 1, 2, 4, 7]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  quickSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
