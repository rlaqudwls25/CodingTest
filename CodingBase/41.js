// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.

const primeFunc = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        console.log("No");
        return false;
      }
    }
    if(n === 1){
      console.log("No");
      return false;
    }
    console.log("Yes");
  };
  
  primeFunc(11);
  