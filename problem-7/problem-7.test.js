const exchange = (array, a, b) => {
  [array[b], array[a]] = [array[a], array[b]];
};

const initializeHeap = (array) => {
  const mid = Math.floor((array.length - 1) / 2);

  // initialize heap
  for (let i = mid; i > 0; i--) {
    let index = i;

    while (index <= mid) {
      const leftIndex = 2 * index;
      const rightIndex = 2 * index + 1;

      const current = array[index];
      const leftChild = array[leftIndex];
      const rightChild = array[rightIndex] ?? 0;

      const max = Math.max(leftChild, rightChild);

      if (current >= max) {
        break;
      }

      if (leftChild >= rightChild) {
        exchange(array, index, leftIndex);

        index = leftIndex;
      } else {
        exchange(array, index, rightIndex);

        index = rightIndex;
      }
    }
  }
};

const sort = (array, lastIndex) => {
  if (lastIndex <= 1) {
    return;
  }

  const mid = Math.floor(lastIndex / 2);

  const rootIndex = 1;

  // root 교체
  exchange(array, rootIndex, lastIndex);

  // sync
  let index = rootIndex;

  while (index <= mid) {
    const leftIndex = 2 * index;
    const rightIndex = 2 * index + 1;

    const current = array[index];
    const leftChild = leftIndex < lastIndex ? array[leftIndex] : 0;
    const rightChild = rightIndex < lastIndex ? array[rightIndex] : 0;

    const max = Math.max(leftChild, rightChild);

    if (current >= max) {
      break;
    }

    if (leftChild >= rightChild) {
      exchange(array, index, leftIndex);

      index = leftIndex;
    } else {
      exchange(array, index, rightIndex);

      index = rightIndex;
    }
  }

  sort(array, lastIndex - 1);
};

const heapSort = (array) => {
  initializeHeap(array);
  sort(array, array.length - 1);
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
