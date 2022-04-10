function solution(arr, m) {
  let count = 0; // 사줄 수 잇는 학생 수
  let sum = 0; // 상품의 가격 + 배송비 합

  const z = arr[0].length;
  const x = arr.length;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < z; j++) {
      if (sum < 28) {
        sum += arr[i][j];
      }
      count++;
    }
  }

  return count;
}

arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

money = 28;

solution(arr, money);
