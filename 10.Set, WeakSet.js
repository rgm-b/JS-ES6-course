// Set и WeakSet новые объекты появившиеся в ES6.
// Set это специальная массивоподобная конструкция, которая может содержать различные значения и удобно с ними работать.
// в Сэте могут храниться только уникальные значения.

let set = new Set(); // получили экземпляр данного класса

set.add(4);
set.add('Hello'); // set.size 2
set.add({}); // set.size 3
set.add({}); // set.size 4  потому что объект уникален
set.add(4); // set.size 4   потому что значение 4 уже было добавлено в Сет ранее и оно не было добавлено в Сет, потому что (стр. 3)
set.add(4); // set.size 4   потому что значение 4 уже было добавлено в Сет ранее и оно не было добавлено в Сет, потому что (стр. 3)
set.add(4); // set.size 4   потому что значение 4 уже было добавлено в Сет ранее и оно не было добавлено в Сет, потому что (стр. 3)

console.log(set);
console.log(set.size);


let numSet = new Set([5,5,7,8,9,8]); //можно создавать Сэты из массива
console.log(numSet);
console.log(numSet.size);

let strSet = new Set().add('Hello').add("World").add('!'); //при создании Сэта можно "чейнить = писать в цепочку" различные его методы
console.log(strSet);
console.log('strSet.sise:', strSet.size);
console.log('strSet.has:', strSet.has(4));  // в Сэте есть 4 ? // false
console.log('strSet.has:', strSet.has('World'));  // в Сэте есть 'World' ? // true

console.log('strSet.delete:', strSet.delete('World'));
console.log('strSet.sise:', strSet.size);
console.log('strSet.has:', strSet.has('World'));  // в Сэте есть 'World' ? // false


console.log('strSet.clear:', strSet.clear());  //очистить весь сэт
console.log('strSet.sise:', strSet.size);




// отличия Set и WeakSet

let testSet = new Set();
let key = {};
testSet.add(key);
console.log(testSet);
console.log(testSet.size);
key = null;
console.log(testSet); //несмотря на то что объект key перестал существовать, данное значене всё равно хранится в Сэте
console.log(testSet.size);



//чтобы при удалении ссылки на объект данные больше не хранились в Сэте используем конструктор WeakSet
let testWeakSet = new WeakSet();
let key2 = {};
testWeakSet.add(key2);
console.log(testWeakSet);
console.log(testWeakSet.size);

key2 = null;
console.log(testWeakSet);
console.log(testWeakSet.size);

