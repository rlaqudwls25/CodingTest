// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자의 개수를 출력한다.
// ▣ 입력예제 1 KoreaTimeGood
// ▣ 출력예제 1 3

// 첫번째 풀이
function solution(answer) {
  let count = 0;
  for (let x of answer) {
    if (x === x.toUpperCase()) {
      count += 1;
    }
  }

  return count;
}
solution("KoreaTimeGood");

// 두번째 풀이
function solution(answer) {
  let count = 0;
  for (let x of answer) {
    const num = x.charCodeAt();
    // 대문자 아스키 코드는 65이상 90이하
    // 소문자는 97 이상 122이하
    if (num >= 65 && num <= 90) {
      count += 1;
    }
  }

  return count;
}
solution("KoreaTimeGood");
