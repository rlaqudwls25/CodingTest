// 이진트리 순회(DFS)

// 전위순회
function solution(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v;
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return Number(answer);
}

solution(1);

// 중위순회
function solution(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      answer += v;
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return Number(answer);
}

solution(1);

// 후위순회
function solution(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v;
    }
  }
  DFS(v);
  return Number(answer);
}

solution(1);
