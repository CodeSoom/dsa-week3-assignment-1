const less = (a, b) => a < b;

const merge = (list, start, mid, end) => {
  let left = start;
  let right = mid + 1;

  const temp = [...list];

  for (let i = start; i <= end; i++) {
    if (left > mid) {
      list[i] = temp[right];
      right++;
    } else if (right > end) {
      list[i] = temp[left];
      left++;
    } else if (less(temp[left], temp[right])) {
      list[i] = temp[left];
      left++;
    } else {
      list[i] = temp[right];
      right++;
    }
  }
};
const mergeSortBottomUp = (list) => {
  const { length } = list;

  for (let n = 1; n < length; n = n * 2) {
    for (let start = 0; start < length - n; start = start + n * 2) {
      merge(
        list,
        start,
        start + (n - 1),
        Math.min(start + ((n * 2) - 1), length - 1),
      );
    }
  }
};

module.exports = {
  mergeSortBottomUp,
};
