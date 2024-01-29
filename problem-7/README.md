# 자료구조와 알고리즘 3주차 과제 - 힙 정렬 구현하기

1. 다음은 힙 정렬의 알고리즘입니다. 알고리즘을 보고 다음 값이 주어졌을 때
   어떻게 정렬이 되는지 그림으로 그려보세요.

> 힙 구성: 입력 배열을 최대 힙 구조로 만듭니다.
> 정렬취합: 힙에서 가장 큰 원소(루트)를 배열의 마지막 원소와 바꾸고 힙 크기를
> 줄입니다. 이후, 바뀐 루트를 제외하고 다시 힙 속성을 복원합니다. 이 과정을 힙이
> 빌 때까지 반복합니다.

```
3, 5, 6, 8, 1, 2, 4, 7
```

2. 힙 정렬의 코드를 보고 어떻게 동작하는지 그림을 그려보세요. 마찬가지로 위의 값이 주어졌다고 했을 때 코드를 따라가며 그림을 그려가며 이해해 보세요.
![heap-sort.png](heap-sort.png)
![heap-sort-sink-01.png](heap-sort-sink-01.png)
![heap-sort-sink-02.png](heap-sort-sink-02.png)
![heap-sort-sink-03-01.png](heap-sort-sink-03-01.png)
![heap-sort-sink-03-02.png](heap-sort-sink-03-02.png)
![heap-sort-sink-04-01.png](heap-sort-sink-04-01.png)
![heap-sort-sink-04-02.png](heap-sort-sink-04-02.png)
![heap-sort-sink-04-03.png](heap-sort-sink-04-03.png)
![heap-sort-sink-05.png](heap-sort-sink-05.png)

3. 힙 정렬의 코드를 직접 구현해 주세요.
