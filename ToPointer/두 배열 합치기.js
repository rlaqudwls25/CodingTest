// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.
// ▣ 입력예제 1 3
// 135
// 5
// 23679
// ▣ 출력예제 1 12335679

// 투포인터 방식
// O(n+m)
function solution(a, b) {
  let result = [];
  const n = a.length;
  const m = b.length;

  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) {
      result.push(a[p1]);
      p1++;
    } else {
      result.push(b[p2]);
      p2++;
    }
  }

  while (p1 < n) {
    result.push(a[p1++]);
  }
  while (p2 < m) {
    result.push(b[p2++]);
  }

  return result;
}

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];
solution(a, b);

// 두 번째 풀이
// O(nlogN)
// function solution(a, b) {
//   let result = [a, b];

//   return result.flatMap((item) => item).sort((a, b) => a - b);
// }

// const a = [1, 3, 5];
// const b = [2, 3, 6, 7, 9];
// solution(a, b);
