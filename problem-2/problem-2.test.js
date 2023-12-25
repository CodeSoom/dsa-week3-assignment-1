const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const findMinIndex = (array, startIndex) => {
  let minIndex = startIndex;

  for (let i = startIndex; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i;
    }
  }

  return minIndex;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const minIndex = findMinIndex(array, i);

    if (minIndex === i) {
      continue;
    }

    swap(array, i, minIndex);
  }
};

test.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 5]], [[4, 2, 1, 5, 3]]])(
  '주어진 배열을 오름차순으로 정렬한다',
  (array) => {
    selectionSort(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  }
);
