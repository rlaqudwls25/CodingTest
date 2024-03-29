function solution(board, moves) {
  let answer = 0;

  let stack = [];
  moves.forEach((position) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][position - 1] !== 0) {
        let temp = board[i][position - 1];
        board[i][position - 1] = 0;

        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(temp);
        }
        break; //인형뽑기의 position이 바뀌지않고 계속 뽑는거 방지예
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
solution(a, b);
