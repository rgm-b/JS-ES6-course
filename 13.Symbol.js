// Тип данных symbol

// Символ - уникальная сущность с помощью которой можно делать некоторые защищенные поля

let s = Symbol("field");
let s1 = Symbol("field");
let s2 = Symbol('1');
let s3 = Symbol('1');

console.log(s2 === s3); //false , каждый символ является уникальным в независимости от того что в него было передано


let obj = {
    [s]: 'Alex',
    age: 20,
    admin: true
}
console.log(obj); //{ [Symbol(field)]: 'Alex' }
console.log(obj['field']); // undefined
console.log(obj[s1]); // undefined ,  в s1 символ такой же как s
console.log(obj[s]); // Alex
//таким образом мы можем делать Уникальные Ключи (поля) у объекта
//получается некоторая защита, которая позволяет удобно работать с некоторыми защищёнными полями

console.log(Object.getOwnPropertyNames(obj)); // [ 'age', 'admin' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(field) ]

let num = 1;
let str = 'abc';
let arr = [1,2,3,4];
let object = {name: 'Alex'};

console.log('Number:', num[Symbol.iterator]); // undefined
console.log('String:', str[Symbol.iterator]); // function
console.log('Array:', arr[Symbol.iterator]); // function
console.log('Object:', object[Symbol.iterator]); // undefined
// у строки и массива символ итератор существует, что означает, что с массивом и строкой работает цикл for..of

//огранизация цикла for..of
function createIterator(arr){
    let count = 0;
    return {
        next(){
            return count < arr.length
            ? {value: arr[count++], done: false}
            : {value: undefined, done: true}
        }
    };
}

let iter = createIterator([1,2,3,4,5]);
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );

// функция, которая покажет как работает цикл for..of и как его можно совмещать с символами
// создадим ф-ию, которая будет генерировать последовательность Фибоначи
 let fib = {
     [Symbol.iterator](){
         let pre = 0, cur = 1;
        return{
            next(){
                [pre, cur] = [cur, pre+cur]; //деструктуризация
                return { value: cur, done: false }
            }
        }
     }
 }
console.log('Фибоначи:');
for (let n of fib){
     if(n > 1000) break;
     console.log(n);
 }