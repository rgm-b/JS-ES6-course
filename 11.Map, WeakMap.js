// конструктор Map

// Map – это коллекция ключ/значение, как и Object.
// Но основное отличие в том, что Map позволяет использовать КЛЮЧИ любого типа (например объекты могут быть ключами)

let map = new Map();
map.set('name', "Alex");  //map.set(key, value) – записывает по ключу key значение value.
map.set('age', 30);

console.log(map);
console.log(map.size); //2
console.log(map.get('name')); //получить значение по ключу

let obj1 = {};
let obj2 = {};

map.set(obj1, 10);
map.set(obj2, 70);

console.log(map);
console.log(map.size); //4
console.log('has:', map.has(obj2) ); //true;  возвращает true, если ключ key присутствует в коллекции, иначе false
console.log('delete:', map.delete(obj2) ); //true;   удалить элемент по ключу
console.log(map.size); //3
console.log('has:', map.has(obj2) ); //false


//  создание карты с помощью массива

let mapUser = new Map([
    ['name', 'John'],
    ['age', 90],
]);
console.log(mapUser);


//     перебор коллекции Map

for (let key of mapUser.keys() ){
    console.log('keys:', key);
}
for (let val of mapUser.values() ){
    console.log('values:', val);
}
for (let ent of mapUser.entries() ){ // entries() используется по умолчанию в for..of
    console.log(`Ключ: ${ent[0]}, значение: ${ent[1]}}`);
}
for (let ent of mapUser){  // вызов метода entries() в цикле for..of можно опустить
    console.log(`Ключ: ${ent[0]}, значение: ${ent[1]}}`);
}

// конструктор WeakMap и отличия от Map

let mapTest = new Map();
let key = {};
mapTest.set(key, 'value');
console.log('size:', mapTest.size); //1
key = null;
console.log('size:', mapTest.size); //1

let weakMapTest = new WeakMap();
let key1 = {};
weakMapTest.set(key1, 'value');
console.log('size:', weakMapTest.size); //undefined
key = null;
console.log('size:', weakMapTest.size); //undefined
