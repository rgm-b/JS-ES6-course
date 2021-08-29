// function Car(name){
//     this.name = name;
// }
// Car.prototype.logName = function(){
//     console.log(this.name)
// }
// let car = new Car('Lada');
// car.logName();


class Car {
    constructor(name){
        this.name = name;
    }
    logName(){
        console.log(this.name)
    }
    static staticFunc(){    //статические методы создаются с помощью ключевого слова static
        console.log('I am static!');
    }
}
let car = new Car('Nissan');
car.logName();

console.log( car.logName === Car.prototype.logName );

Car.staticFunc();



class myCar {
    constructor(name){
        console.log('myCar constructor');
        this.name = name;
    }
    logName(){
        console.log('Car name is:',this.name);
    }
}

class BMV extends myCar{  //extends(англ. расширяет) класс BMV наследуется от класса Car
    constructor(name){
        super(name);  //super() для того чтобы вызвать конструктор главного класса (строка 32)
        console.log('BMV constructor');
    }
   /* logName(){    //можно переписывать методы родительских классов
        console.log('BMV name is:',this.name);  //описание нового метода
        super.logName(); //а также дополнительно вызывать родительские методы из перезаписанного класса
    } */
}

let bmv = new BMV('X6');
bmv.logName();