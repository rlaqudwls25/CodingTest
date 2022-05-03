function solution(str) {
  let lazer = 0;
  let bong = 0;

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i] + str[i+1])
    // console.log(str[i])
    if (str[i] === "(") {
      stack.push(str[i]);
      if (str[i + 1] === ")") {
        stack.pop();
        lazer += 1;
      }
    } else if (str[i - 1] === ")" && str[i] === ")") {
      bong += 1;
      console.log(bong);
    }

    // if(str[i] + str[i+1] === '()'){
    //   answer += 1;
    // }
  }

  return lazer;
}

solution("()(((()())(())()))(())");
