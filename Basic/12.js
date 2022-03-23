function solution(arr) {
  let n = arr.length;

  //   Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }

  return answer;
}

arr = [92, 92, 92, 100, 91, 76];
solution(arr);
