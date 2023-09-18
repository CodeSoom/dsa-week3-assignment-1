const exchange = (list, a,b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a,b) => a < b;

const insertionSort = (array) => {
  const {length} = array;

  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (less(array[j], array[j - 1])) {
        exchange(array, j, j - 1);
      } else {
        break;
      }
    }
  }
};


test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  insertionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
