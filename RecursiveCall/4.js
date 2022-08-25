// 부분집합 구하기(DFS)

// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 단 공집합은 출력하지 않습니다.

function solution(num) {
  let answer = [];

  let check = Array.from({ length: num + 1 }, () => 0);

  function DFS(v) {
    if (v === num + 1) {
      let temp = "";
      for (let i = 1; i <= num; i++) {
        if (check[i] === 1) {
          temp += i + " ";
        }
      }

      if (temp.length > 0) {
        answer.push(temp.trim());
      }
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer.join("  ");
}

solution(3);