function solution(arr) {
  let count = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count += 1;
      answer += count;
    } else {
      count = 0;
    }
  }

  return answer;
}

// arr = [1,0,1,1,1,0,0,1,1,1,1]
arr = [1, 1, 1, 1, 1, 0, 1];
solution(arr);
