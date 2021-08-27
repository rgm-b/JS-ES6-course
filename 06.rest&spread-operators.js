function logStrings(num, str, str1, str2, str3){
    //console.log(num, str, str1, str2, str3);
    //console.log(arguments);
    var args = Array.prototype.slice.call(arguments); //делаем массив из arguments
    console.log(num, args);
    //console.log(arguments[1]);
}
logStrings(10, 'hi', 'hi1', 'hi2', 'hi3'); // 10 [ 10, 'hi', 'hi1', 'hi2', 'hi3' ]
//допустим мы хотим передавать 100 параметров в функцию
//неудобно будет дописывать их в трёх местах


// Для чего нужен оператор rest
// rest (с англ. "оставшиеся параметры в функцию")
function logStringsNew(num, ...args){  //название 'args' может быть любое
    console.log(num, args);
}
logStringsNew(10, 'hi', 'hi1', 'hi2', 'hi3');  // 10 [ 'hi', 'hi1', 'hi2', 'hi3' ]
//получаем сразу отдельно значение num и массив args
//args является настоящим массивом, а не псевдомассивом, как arguments
//поэтому никакие преобразования для него не нужны


//   Оператор spread

let spreadArray = ['hi', 'hi1', 'hi2', 'hi3'];

logStringsNew(10, ...spreadArray); // 10 [ 'hi', 'hi1', 'hi2', 'hi3' ]
//logStringsNew.apply(undefined, [10].concat(spreadArray)); //как babel преобразовал spread оператор (undefined - потому что контекст нам неважен)
//spead оператор разворачивает массив в отдельную переменную через запятую
//logStringsNew(10, 'hi', 'hi1', 'hi2', 'hi3');

let arr = [...spreadArray]; //также можно создать клон массива
console.log(arr);