// 첫번째 풀이
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

// 두번째 풀이  Stack 개념 사용
// function solution(s) {
//   let answer = "Yes";
//   const stack = [];

//   for (let x of s) {
//     if (x === "(") {
//       stack.push(x);
//     } else {
//       if (stack.length === 0) return "No";
//       stack.pop();
//     }
//   }

//   return answer;
// }

solution("(()(()))(()");
solution("(())");
