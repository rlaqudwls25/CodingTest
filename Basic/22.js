function solution(arr) {
  const m = arr.length; // 행의 길이
  const n = arr[0].length; //학생의 길이

  let count = 0;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);

      for (let k = 0; k < m; k++) {
        let p1 = 0;
        let p2 = 0;
        for (let z = 0; z < n; z++) {
          if (arr[k][z] === i) {
            p1 = z;
          } else if (arr[k][z] === j) {
            p2 = z;
          }
        }

        if (p1 < p2) {
          count++;
        }
      }
      if (count === m) {
        answer++;
      }
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
