function solution(str) {
  // 숫자를 무시한다.  ==> 숫자를 제거한다.
  // 주어진 문자와 주어진 문자를 거꾸로 검사했을 때 같아야 한다.

  let answer = "No";

  s = str.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") === s) {
    answer = "Yes";
  }

  return answer;
}

str = "found7, time: study; Yduts; emit, 7Dnuof";

solution(str);
