const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const shuffle = (array) => {
  let randomIndex;

  for (let i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
};

const partition = (array, lo, hi) => {
  let left = lo + 1;
  let right = hi;

  const pivot = array[lo];

  while(true) {
    while (less(array[left], pivot)) {
      if(left === hi) {
        break;
      }

      left++;
    }

    while (less(pivot, array[right])) {
      if (right === lo) {
        break;
      }
      right--;
    }

    if (left >= right) {
      break;
    }
    exchange(array, left, right);
  }

  exchange(array, lo, right);
  return right;
};

const sort = (array, lo, hi) => {
  if (lo >= hi) {
    return;
  }

  const j = partition(array, lo, hi);
  sort(array, lo, j - 1);
  sort(array, j + 1, hi);
};

const quickSort = (array) => {
  shuffle(array);
  sort(array, 0, array.length - 1);
};

test.each([
  [[8, 7, 6, 5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8]],
  [[3, 5, 6, 8, 1, 2, 4, 7]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  quickSort(array);

  expect(array)
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
