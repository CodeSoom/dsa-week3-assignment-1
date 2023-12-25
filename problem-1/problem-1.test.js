const swap = (array, left, right) => {
  [array[left], array[right]] = [array[right], array[left]];
};

const bubbleSort = (array) => {
  let loopCount = 0;
  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - i - 1; j++) {
      loopCount++;
      const left = array[j];
      const right = array[j + 1];

      if (left > right) {
        swap(array, j, j + 1);

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return loopCount;
};

test.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 5]], [[4, 2, 1, 5, 3]]])(
  '주어진 배열을 오름차순으로 정렬한다',
  (array) => {
    bubbleSort(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  }
);

test('이미 정렬된 배열은 정렬하지 않는다', () => {
  const array = [1, 2, 3, 4, 5];

  const loopCount = bubbleSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
  expect(loopCount).toBe(array.length - 1);
});
