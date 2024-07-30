
const shuffle = (array) => {
  let randomIndex;

  for (let i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
};


const exchange = (array, low, high) => {
  [array[high], array[low]] = [array[low], array[high]];
}

const less = (a, b) => a < b;

const patition = (array, low, high) => {
  let left  = low + 1,
      right = high;

  const pivot = array[low];

  while(true){
    while(less(array[left], pivot)){
      if(left === high) break;

      left++;
    }

    while(less(pivot, array[right])){
      if(right === low) break;

      right--;
    }

    if(left >= right) break; // 가리키는 요소가 겹칠 때
    exchange(array, left, right);
  }

  exchange(array, low, right);
  return right;
}

const sort = (array, low, high) => {
  if(low >= high) return;

  const index = patition(array, low, high);
  sort(array, low, index - 1);
  sort(array, index + 1, high);
}

const quickSort = (array) => {
  shuffle(array); // 배열 무작위로 섞음
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
