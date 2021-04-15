// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
// **입출력**

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

// 첫 번째 풀이
let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i + 1]) {
    max = numbers[i];
  }
}
cosnoel.log(max);

// 두 번째 풀이
let numbers = prompt("10개의 숫자를 입력해주세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
