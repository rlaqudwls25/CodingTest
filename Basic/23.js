function solution(arr, m) {
  const x = arr.length;
  const sArr = arr.sort((a, b) => a[0] - b[0]);
  let answer = 0;

  for (let i = 0; i < x; i++) {
    let money = m - (sArr[i][0] / 2 + sArr[i][1]); // 각 상품의 가격을 할인
    let count = 1;

    for (let j = 0; j < x; j++) {
      if (i !== j && sArr[j][0] + sArr[j][1] <= money) {
        money -= sArr[j][0] + sArr[j][1];
        count++;
      }
    }

    answer = Math.max(count);
  }
  return answer;
}

arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

solution(arr, 28);
