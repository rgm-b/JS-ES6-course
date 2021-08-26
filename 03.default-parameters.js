const func = (a) => {
    a = a || 10; //старый метод записи параметров по умолчанию. ИЛИ приводит к boolean
    return a;
};
console.log(func()); //10

const num = 1;
const myNum = () => 2;
const giveNumber = (a=10, b=5, c=a*2, d = num, e = myNum()) => { //новый метод записи параметров по умолчанию
    return a+b+c+d-e;
};
console.log(giveNumber()); //34
console.log(giveNumber(2)); //10   передали только параметр a = 2
console.log(giveNumber(undefined, 4)); //33   передали только параметр b=4
console.log(giveNumber(undefined, 4, num, myNum())); //15  передали b=4   и   c=num

//передача параметров по умолчанию происходит только присваиванием '=' при объявлении ф-ии (см. стр. 9)
//сами переменные и выполнение ф-ий без присваивания передавать можно только при вызове функции (см. стр. 15)