function solution(str) {
  // 회문을 검사할 때 대소문자를 구분하지 않기 때문에 toLowerCase를 사용해서 소문자로 바꿔준다.
  // 첫번째 마지막번째의 알파벳이 동일한지 Check

  // 첫번째 풀이 방법
  let answer = "Yes";
  let lowStr = str.toLowerCase();
  let len = str.length;

  for (let i = 0; i < len; i++) {
    if (lowStr[i] !== lowStr[len - 1 - i]) {
      answer = "No";
    }
  }

  // 두번째 풀이 방법
  //   let answer = ""
  //   s = str.toLowerCase();

  //   if(s.split('').reverse().join('') === s) {
  //     answer = "Yes"
  //   } else {
  //     answer = "No"
  //   }

  return answer;
}

str = "goooooooooooG";

solution(str);
