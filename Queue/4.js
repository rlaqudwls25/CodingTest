function solution(bridge_length, weight, truck_weights) {
  // 경과 시간
  let time = 0;

  let bridge = Array.from({ length: bridge_length }, (v) => (v = 0));

  while (bridge.length) {
    bridge.shift();
    time += 1;

    if (truck_weights.length) {
      let sum = bridge.reduce((acc, cur) => acc + cur);
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return time;
}

solution(2, 10, [7, 4, 5, 6]);
solution(100, 100, [10]);
