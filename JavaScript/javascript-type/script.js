// let foo = 42;
// foo = 'bar';
// foo = true;
// console.log(typeof foo);
//원시 타입
//문자열 String
const name = 'han';
// number
const age = 30;
// Boolean
const hsJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열
const hobbies = ['Walking','Books'];
//  Object 객체
const address = {
    province: '경기도',
    city: '성남시'
}
console.log(typeof hobbies)
console.log(Array.isArray(address))
