function solution(str) {
  // 앞에서부터 하나하나씩 비교
  // 마지막 문자는 비교할 부분이 없으니 s=str+""를 만들어준다.

  let answer = "";
  let count = 1;
  s = str + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      if (count > 1) {
        answer += String(count);
        count = 1;
      }
    }
  }

  return answer;
}
str = "KKHSSSSSSSE";
solution(str);
