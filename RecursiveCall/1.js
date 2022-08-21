// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.
// ▣ 출력설명
// 첫째 줄에 출력한다.
// ▣ 입력예제 1 3
// ▣ 출력예제 1 123

function solution(number) {
  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      // console.log(L) // 3 2 1
      DFS(L - 1);
      // console.log에 찍히기 전에 DFS함수를 다시 호출한다.
      // stack 구조에 따르면 복귀주소로 인하여 L===0일 때 return 하기 때문에 15번 라인으로 돌아와 1 => 2 => 3 으로 위에부터 쌓여있는 L값이 출력 된다.
      // console.log(L) // 1 2 3
    }
  }

  DFS(number);
}

solution(3);
