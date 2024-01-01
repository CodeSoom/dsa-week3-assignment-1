const exchange = (array, a,b)=>  {
  [array[b], array[a]] = [array[a], array[b]];
};

const less = (a,b) => a<b;

const bubbleSort = (array) => {
  const {length} = array;
  let isAligned = false;

  for (let i = 0; i< length; i++) {
    for (let j = 0; j< (length -i -1); j++) {
      if (less(array[j + 1], array[j])) {
        exchange (array, j, j+1);
        isAligned = false;
      } 
      else isAligned = true; // exchange하지 않았을 경우 정렬된 상태
    }
    if (isAligned) return array; // j를 한 바퀴 돌 동안 isAligned가 true면 정렬된 배열
  }
};

test.each([
  [[5, 4, 3, 2, 1]],
  [[1, 2, 3, 4, 5]],
  [[4, 2, 1, 5, 3]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  bubbleSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5]);
});
