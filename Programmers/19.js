function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = 100;

  for (i = 0; i < 7; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }

  // for(let x of arr) 도 가능

  answer.push(sum);
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 39, 53, 92, 87];
solution(arr);
