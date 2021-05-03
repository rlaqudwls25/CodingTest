// 카펫
// 문제 설명
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

// 풀이
function solution(brown, yellow) {
  // 전체 칸 수
  const totalSpace = brown + yellow;

  // 전체 칸수의 약수를 가로 세로 크기로 해준다.
  // 만약 전체 칸 수가 12면 가로 세로 후보는 1,2,3,4,6,12
  // 1,12 = 가로가 1이기 때문에 조건에 불만족
  // 2,6  = 마찬가지
  // 3,4  = 마찬자기
  // 12,1 = 자기 자신은 세로 값이 1이 나오기 때문에 제외

  for (let i = Math.floor(totalSpace / 2); i > 0; i--) {
    if (totalSpace % i !== 0) continue;

    const width = i;
    const heigth = totalSpace / i;
    // 조건에 맞는 4,3와 6,2만 비교해주면 된다.
    if ((width - 2) * (heigth - 2) === yellow) {
      return [width, heigth];
    }
  }
}
