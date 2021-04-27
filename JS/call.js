// 객체에는 배열 메서드를 직접 적용할 수 없다.
// 키가 0 또는 양의 정수인 프로퍼티가 존재하고 length 프로퍼티 값이 0 또는 양의 정수인 객체, 즉 배열의 구조와 유사한 유사배열객체 call 또는 apply 메서드를 이용해 배열 메서드를
// 활용할 수 있다.
const obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

Array.prototype.push.call(obj, "d"); // 4
console.log(obj); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }

// slice 메서드는 원래 시작 인덱스값과 마지막 인덱스값을 받아 시작값 ~ 마지막값의 앞 부분까지의 배열 요소를 추출하는 메서드인데
// 매개변수를 아무것도 넘기지 않을 경우에는 그냥 원본 배열의 얕은 복사본을 반환한다.
const arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c' ]
