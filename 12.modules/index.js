import * as extra from './extra.js'; //импортируем всё как extra (объект) из extra.js
import {name, age} from './extra.js'; //можно использовать деструктуризацию при импорте
import {age as a} from './extra.js'; //деструктуризация + сохранили в переменную a

import {func} from './extra.js'; //импорт ф-ии через деструктуризацию
//import funcDef from './extra.js'; //импорт ф-ии экспортированной по умолчанию

import Car from './extra.js';


console.log(extra);
console.log(extra.age); // 20
console.log(name, age); // Alex 20
console.log(a); // 20

console.log(extra.func)
func();

// console.log(funcDef);
// funcDef();

var car = new Car();


/*Каждый модуль имеет свою собственную область видимости. Другими словами,
переменные и функции, объявленные в модуле, не видны в других скриптах.
 */
window.user = extra;
/*Если нам нужно сделать глобальную переменную уровня всей страницы, можно явно присвоить её объекту window,
тогда получить значение переменной можно обратившись к window.user.
! Но это должно быть исключением, требующим веской причины.
 */

// подробнее https://learn.javascript.ru/modules-intro
