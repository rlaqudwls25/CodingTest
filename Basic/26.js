function solution(s) {
  let answer = [];

  for (let x of s) {
    if (x === ")") {
      while (answer.pop() !== "(");
    } else {
      answer.push(x);
    }
  }

  return answer.join("");
}

solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
