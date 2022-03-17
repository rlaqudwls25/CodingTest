// 첫 번째 풀이
function solution(num) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!num.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
solution([5, 8, 4, 0, 6, 7, 9]);

// 두 번째 풀이
function solution(num) {
  return 45 - num.reduce((acc, cur) => acc + cur, 0);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
solution([5, 8, 4, 0, 6, 7, 9]);
