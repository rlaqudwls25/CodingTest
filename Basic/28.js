function solution(str) {
  // 연산자를 발견하면 앞에 두개의 숫자를 그 연산자로 계산한다.
  // 계속 반복 해야함.
  let answer = 0;
  let stack = [];

  for (let x of str) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let rigthNum = stack.pop();
      let leftNum = stack.pop();
      switch (x) {
        case "+":
          stack.push(leftNum + rigthNum);
          break;

        case "*":
          stack.push(leftNum * rigthNum);
          break;

        case "-":
          stack.push(leftNum - rigthNum);
          break;

        case "/":
          stack.push(leftNum / rigthNum);
          break;
      }
    }
  }

  answer = stack[0];

  return answer;
}

solution("352+*9-3");
