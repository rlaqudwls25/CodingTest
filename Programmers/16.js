// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.
// ▣ 입력예제 1 6 5 11
// ▣ 출력예제 1 5

function solution(a, b, c) {
  // 첫번째 풀이
  //     if (a<b) {
  //      result = a;
  //     } else {
  //       result = b;
  //     }
  //     if (result > c) {
  //       result = c
  //     }
  //   result.sort((a,b) => {
  //    return a-b
  //   })
  // 두번째 풀이
  //   let result = [a, b, c];
  //   return Number(
  //     result
  //       .sort((a, b) => a - b)
  //       .join(",")
  //       .slice(0, 1)
  //   );
}

solution(11, 2, 3);
