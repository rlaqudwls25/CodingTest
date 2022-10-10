// 첫번째 풀이
function solution(a, b) {
  const arr = [a, b];

  for (let j = 0; j < a.length; j++) {
    result += arr[0][j] * arr[1][j];
  }

  return result;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);

// 두번째 풀이
function solution(a, b) {
  return a.reduce((res, cur, idx) => res + cur * b[idx], 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);
