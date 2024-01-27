const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const shellSort = (list) => {
  let h = 1;
  const { length } = list;

  while (h < (length / 3)) {
    h = (3 * h) + 1;
  }

  for (let k = h; k >= 1; k = Math.floor(k / 3)) {
    for (let i = k; i < length; i++) {
      for (let j = i; j >= k; j--) {
        if (less(list[j], list[j - k])) {
          exchange(list, j, j - k);
        }
      }
    }
  }
};

test.each([
  [[24, 20, 19, 19, 18, 16, 15, 13, 12, 12, 12, 8, 5, 5, 5, 1]],
  [[1, 5, 5, 5, 8, 12, 12, 12, 13, 15, 16, 18, 19, 19, 20, 24]],
  [[19, 8, 5, 12, 12, 19, 15, 18, 20, 5, 24, 1, 13, 16, 12, 5]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  shellSort(array);

  expect(array)
    .toEqual([1, 5, 5, 5, 8, 12, 12, 12, 13, 15, 16, 18, 19, 19, 20, 24]);
});
