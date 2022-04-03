function solution(arr) {
  let answer;
  let max = 1; // 각 자리의 합이 같은 경우 비교 해주기 위한 변수

  for (let x of arr) {
    let temp = x; // while문 안에서 값을 가공하기 위한 변수
    let sum = 0; // 각 자리의 합
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) {
        max = sum;
        answer = x;
      }
    }
  }

  return answer;
}

arr = [128, 460, 603, 40, 521, 137, 123];

solution(arr);

// while문을

// let sum = x.toString().split('').reduce((a,b) => a + Number(b), 0) 코드 한줄로 대체가 가능하다.
