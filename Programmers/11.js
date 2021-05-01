// 가장 큰 수
// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

// 첫 번째 풀이
function solution(numbers) {
  const answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer.replace(/^0+/, "0");
}

// map() 메서드를 통해 numbers의 요소들을 모두 string으로 변형
// string으로 변형한 numbers를 sort() 메서드를 통해 정렬
// a+b와 b+a로 비교해 내림차순으로 정렬
// join() 메서드를 통해 배열의 모든 요소를 문자열로 이어붙임
// 0만 있는 경우, answer 값이 0...0이 되므로 문자열의 첫번째에 반복해서 나오는 0...0을 0으로 replace해서 결과 return
