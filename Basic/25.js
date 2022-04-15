function solution(s) {
  let result = "Yes";
  const string = s.split("");

  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].indexOf(")") === -1 || string[i].indexOf("(") === -1) {
      count++;
    }
  }

  if (count % 2 !== 0) {
    result = "No";
  }

  return result;
}

solution("(()(()))(()");
solution("(())");
