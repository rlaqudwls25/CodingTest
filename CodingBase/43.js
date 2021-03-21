// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

// 첫번째 방법
let dec = prompt();
let arrBinary = [];

while (dec) {
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2);
}

console.log(arrBinary.reverse().join(""));

// 두번째 방법
let dec = 160;
console.log(dec.toString(2));
