let obj1 = {a: 1};
let obj2 = {b: 2, c: 3};

//let obj3 = Object.assign(obj1, obj2); // скопирует в obj1  obj2 ,  obj1===obj3
let obj4 = Object.assign({}, obj1, obj2); // скопирует в {} obj1 и obj2, вернёт новый объект obj4

let obj5 = Object.assign({d:4}, obj1, obj2); //{ d: 4, a: 1, b: 2, c: 3 }


console.log(obj1);
console.log(obj2);
// console.log(obj3);
// console.log(obj1===obj3); //true
console.log(obj4);
console.log(obj5);

let findItem = [1,2,3,4,5].find(x => x > 3); // 4  , вернёт первый элемент, который соответствует условиям в теле функции
console.log(findItem);


let str = 'Hello';
console.log(str.repeat(4)); // HelloHelloHelloHello
console.log(str.startsWith('Hel')); //true
console.log(str.startsWith('el')); //false
console.log(str.startsWith('el', 1)); //true ,  1-индекс с которого применить метод
console.log(str.includes('ell'));//true  (включено, содержит)
console.log(str.includes('ell', 2));//false

