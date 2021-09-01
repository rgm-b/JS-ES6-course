//  экспорт переменных

// export let name = 'Alex';
// export let age = 20;

let name = 'Alex';
let age = 20;

// export name;
// export age;

export {name, age};

//  экспорт функций

export function func(){
    console.log('I am func!');
}
// export default function funcDef(){ //результатом экспорта по умолчанию будет сама функция funcDef
//     console.log('I am funcDef!');
// }

//  экспорт классов

export default class Car{
    constructor(){
        console.log('Car constructor');
    }
}

// ! в файле может быть не более одного export default.

//подобно переменным, функции и классы можно экспортировать следующим образом образом:
//export {func, Car}

