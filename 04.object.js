const name = 'Alex';
const age = 28;

const obj = {
    name: name, //старый метод записи  КЛЮЧ: ЗНАЧЕНИЕ (имя переменной)
    age: age
};

const user = {name, age}; //ES6


const createPerson = (name, surname, fieldName, fieldPostfix) => {
    let fullname = `${name} ${surname}`;
    return { fullname,
             name, //ключем становится name, значением строка 'John'
             surname,
            /* getJob: function () {    //старая запись метода объекта
                return 'Front End Developer'
             },*/
            getJob() {      //запись метода объекта на ES6
                return 'Front End Developer'
            },
            [fieldName]: 10, //ключем становится строка 'car', которую мы передаём в ф-ию
            [fieldName + fieldPostfix]: 20
    }
};
//console.log(createPerson('John', 'Smith'));
const person = createPerson('John', 'Smith', 'car', '-model');

//console.log(person.getJob());

console.log('ES6 объект person:', person);



//Создание динамического поля fieldName на ES5

const createPersonOld = (name, surname, fieldName, fieldPostfix) => {
    var fullname = name+' '+surname;
    var user = { fullname,
             name: name, //ключем становится name, значением строка 'John'
             surname: surname,
            getJob: function() {
                return 'Front End Developer'
            },
    }
    user[fieldName] = 10;
    var fieldNamePostfix = fieldName+fieldPostfix;
    user[fieldNamePostfix] = 20;
    return user;
};
var personOld = createPersonOld('John', 'Smith', 'car', '-model');

console.log('ES5 объект personOld:' , personOld);
//console.log(personOld.getJob());