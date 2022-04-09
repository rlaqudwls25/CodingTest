function solution(arr) {
  const m = arr.length; // 행의 길이
  const n = arr[0].length; //학생의 길이

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        //  행
        let p1 = 0;
        let p2 = 0;
        for (let z = 0; z < n; z++) {
          // 열
          if (arr[k][z] === i) p1 = z;
          if (arr[k][z] === j) p2 = z;
        }

        if (p1 < p2) count++; // 0~3번 까지의 자리수로 등수를 판별 즉 0번째가 1등 3번째가 4등
      }

      if (count === m) answer++; // 모든 행의 만족을 해야하니 count가 3이어야 답이 나옴
    }
  }

  return answer;
}

arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

solution(arr);
