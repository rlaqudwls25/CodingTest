function solution(arr) {
  // 각 배열에 담겨 있는 숫자를 뒤집으려면 string => split => reverse => join()
  // 각 숫자 소수 판별

  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    const num = parseInt(arr[i].toString().split("").reverse().join(""));
    if (num % i !== 0 && num !== 1) {
      answer.push(num);
    }
    {
    }
  }

  return answer;
}

arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

solution(arr);
