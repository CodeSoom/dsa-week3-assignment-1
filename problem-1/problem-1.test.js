const bubbleSort = (array) => {
  let swapped = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapped = true;
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if (!swapped) return array;
  }
  return array;
};

test.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 5]], [[4, 2, 1, 5, 3]]])(
  "주어진 배열을 오름차순으로 정렬한다",
  (array) => {
    bubbleSort(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  },
);
