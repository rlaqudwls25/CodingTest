function solution(progress, speed) {
  let result = []; // 배포되는 기능의 수가 적힌 배열

  let day = 1; // 배포일수

  let count = 0; // 배포되는 개수

  while (progress[0]) {
    if (progress[0] + speed[0] * day >= 100) {
      count += 1;
      progress.shift();
      speed.shift();
    } else {
      if (count > 0) {
        result.push(count);
      }
      day++;
      count = 0;
    }
  }

  result.push(count);

  return result;
}
