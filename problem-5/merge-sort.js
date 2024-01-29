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
const mergeSort = (list, start = 0, end = list.length - 1) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(list, start, mid);
  mergeSort(list, mid + 1, end);
  merge(list, start, mid, end);
};

module.exports = {
  mergeSort,
};
