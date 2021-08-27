//      Деструктуризация в объектах
let obj = {
    name: 'Alex',
    age:25,
    isAdmin: true
}
//let name = obj.name; //в ES5
//let age = obj.age; //в ES5

let {name} = obj; //в ES6 если хотим создать переменную, которая совпадает с ключем объекта
let {age, isAdmin} = obj;
let {name:n, age:ag, isAdmin:adm} = obj;  //значение ключа name положить в переменную n  .. и так далее

console.log(name, age, isAdmin);
console.log(n, ag, adm);


//      Деструктуризация в массивах
let array = ['Magnolia', 30, 'green'];

// let tree = array[0];    //в ES5
// let height = array[1];
// let color = array[2];

//let [tree, height, color] = array; //по порядковому номеру запишуться в переменные tree, height, color
//console.log(tree, height, color);

let [tree , , color, roots = true, any] = array; // допустим array[1] параметр нам не нужен, тогда оставляем просто пустое место
                     //параметр по умолчанию roots присваиваем true, которого нет в исходном массиве array
                                    //any будет создана переменная со значение undefined
console.log(tree, color, roots, any);