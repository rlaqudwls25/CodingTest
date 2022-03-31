// 왼쪽의 e를 기준으로 자기 자신이 얼마나 떨어져있는지 확인
// 오른쪽의 e를 기준으로 자기 자신이 얼마나 떨어져있는지 확인
// 순환하면서 e를 만났을 때 0으로 초기화 0이 아니면 +1씩 더해주고 첫번째 두번째 내용에서 나온 각각의 index안에 들어았는 값을 비교후에 작은 값을 다시 넣어준다

function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
