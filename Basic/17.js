// 전역 isNaN() 함수와 달리, Number.isNaN()은 강제로 매개변수를 숫자로 변환하는 문제를 겪지 않습니다.
// 이는 이제 보통NaN으로 변환됐을 값이 안전하게 전달되지만, 실제로는 NaN과 같은 값이 아님을 의미합니다.
//  이는 또한 오직 숫자형이고 또한 NaN인 값만이 true를 반환함을 뜻합니다.

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }

  return parseInt(answer);
}

str = "g0en2T0s8eSoft";

solution(str);
