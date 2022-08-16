function solution(node, edge) {
  const graph = Array.from({ length: node + 1 }, () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(node + 1).fill(0);
  distance[1] = 1;

  const queue = [1];
  while (queue.length) {
    const src = queue.shift(); // 원점
    for (const dest of graph[src]) {
      // 출발점에서 목적지
      if (distance[dest] === 0) {
        // 해당 노드 한 번이라도 갔는지 확인
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);

  return max;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
