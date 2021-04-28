// 생성자 함수 Person의 prototype에 getName이라는 메서드를 지정
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const bj = new Person("Suzi");
bj.__proto__.getName();

// instance의 __proto__가 Constructor의 prototype 프로퍼티를 참조
Person.prototype === bj.__proto__; // true
