// const expression = function(){
//     return 'Hello ES5';
// };
// console.log(expression());

// const arrow = (hello, scriptV) => {
//     return `${hello} ${scriptV}`;
// };
// console.log(arrow('Hello', 'ES6'));

const arrow2 = (hello, scriptV) => `${hello} ${scriptV}`; //если тело ф-ии состоит из 1 строчки, то можно записать так
// return при таком методе записи прописывать не нужно, он будет срабатывать по умолчанию
//console.log(arrow2('Hello my', 'ES6'));

const arrowNum = num => num + 100; //если стрел. ф. принимает 1 параметр () можно убрать
//console.log(arrowNum(50));


//      Функции в объектах (методы в объектах)

const obj = {
    name: 'Alex',
    logName: function(){
        let self = this; //по старой схеме сохранили контекст в переменную self
        setTimeout(function(){ //function создаёт контекст, в данном случае объект Timeout будет в this
            console.log('Метод logName (смотрим что в this):', this); // Timeout {...}
            console.log(`Метод logName через self: ${self.name}`);  //Alex
        },1000)
    },
    logNameNew: function(){
        setTimeout(()=>{    //стрелочная ф-ия не создаёт контекст , поэтому в this остаётся объект obj
            console.log('Метод logNameNew (смотрим что в this):', this);  //объект obj
            console.log(`Метод logNameNew: ${this.name}`);
        },1500)
    }
};
console.log(obj.logName());
console.log(obj.logNameNew());