function solution(a, n) {
  // 3개씩 모든 경우의 수를 계산 해야한다.
  // 중복을 제거 하자.
  // 3개를 합한 수 중에 n번째 값만 뽑는다.

  let result = [];
  const sortArr = new Set(a.sort((a, b) => b - a));
  const Arr = Array.from(sortArr);

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      for (let k = j + 1; k < a.length; k++) {
        result.push(Arr[i] + Arr[j] + Arr[k]);
      }
    }
  }

  return result[n - 1];
}

arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

solution(arr, 3);
