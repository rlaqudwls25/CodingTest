// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1 6 7 11
// ▣ 출력예제 1 YES
// ▣ 입력예제 1 13 33 17
// ▣ 출력예제 1 NO

function solution(a, b, c) {
  let max;
  let result;

  if (a < b) {
    max = b;
  } else {
    max = a;
  }

  if (max < c) {
    max = c;
  }

  if (a + b + c - max <= max) {
    result = "No";
  } else {
    result = "Yes";
  }

  return result;
}

solution(1, 10, 2);
solution(2, 2, 4);
