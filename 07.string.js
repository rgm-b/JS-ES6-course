let name = 'Alex';

let str = `Hello ${name}, glad to see you! ${11+4}`;

var strOld = 'Hello ' +name+ ', glad to see you! ' + (11+4);

console.log(str);
console.log(strOld);


let str2 = `Hello 'world'! "ok"`;
var strOld2 = 'Hello \'world\'';

console.log(str2);
console.log(strOld2);

//Благодаря `` не нужно конкатенировать каждую строку, также сохраняются все отступы
let html = `
    <section>
        <h1>Hello ${name}</h1>
        <p>Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing.</p>
        <div>
            <div>Lorem ipsum dolor sit amet.</div>
            <a href="#">go</a>
        </div>
    <section>
`
console.log(html);