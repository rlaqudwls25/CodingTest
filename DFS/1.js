//경로 탐색(인접행렬)
function solution(node, edge) {
  const graph = Array.from({ length: node + 1 }, () => []);
  const check = Array.from({ length: node + 1 }, () => 0);

  let count = 0;

  for (const [a, b] of edge) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === node) {
      count++;
    } else {
      for (let i = 1; i <= node; i++) {
        if (graph[v][i] === 1 && check[i] === 0) {
          console.log(v, i);
          check[i] = 1;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  }

  check[1] = 1;
  DFS(1);

  return count;
}

solution(5, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]);
