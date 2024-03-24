const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const insertionSort = (array) => {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      } else {
        break;
      }
    }
  }
};

// 테스트
let array = [5, 3, 8, 1, 2];
console.log(insertionSort(array)); // [1, 2, 3, 5, 8]

test.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 5]], [[4, 2, 1, 5, 3]]])(
  "주어진 배열을 오름차순으로 정렬한다",
  (array) => {
    insertionSort(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  },
);
