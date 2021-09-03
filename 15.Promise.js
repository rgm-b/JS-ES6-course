// function oldDelay(ms, func) {
//     setTimeout(function () {
//         func();
//     },ms)
// }
// oldDelay(3000,function () {
//     console.log('Old delay passed');
// });

function delay(ms = 1000) {

    return new Promise( (resolve, reject)=>{  //промис оборачивает в свой конструктор какой-либо асинхронный код
        setTimeout(()=>{
            //resolve();
            reject();
        }, ms )
    });

}

delay(4000)
    .then(()=>{
    console.log('new delay passed');
    })
    .catch(()=>{
        console.error('error');
    });




//Имитация работы с сервером и использование промисов

fetch('http://jsonplaceholder.typicode.com/posts') // запрос по url
    .then( response => {
        console.log('data:', response);  // Response {.......}
        //console.log('data.text():', data.text());  //читает ответ и возвращает как обычный текст
        return response.json()
    })
    .then( result => {
        console.log(result[0]); //для примера обратимся по индексу 0 к массиву объектов, получим первый объект
    });


//JSON.parse(data); //преобразуем строку объект

// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch


// AJAX

let promise = new Promise((resolve, reject)=>{
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function(response){
            resolve(response[0].title)
        },
        error: function(error) {
            reject(error)
        }
    })
});

promise
    .then((data)=>console.log(`Успешно: ${data}`))
    .catch((error)=>console.log(`Ошибка: ${error}`));