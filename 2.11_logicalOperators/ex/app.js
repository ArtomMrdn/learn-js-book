//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
if (age >= 14 && age <= 90)



//Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

if (!age >= 14 && !age <= 90)   //first

if (age < 14 || age > 90) //second



//Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».


let logUser = prompt('Введите ваш логин')
if(logUser == 'Admin') {
    let pass = prompt('Введите пароль')
    if(pass == 'Я главный') {
        alert('Здравствуйте!')
    }else if (pass == '' || pass == null) {
        alert('Отмененно')
    }else{
        alert('Неверный пароль')
    }
}else if (logUser == '' || logUser == null) {
    alert('Отмененно')
}else {
    alert('Eroor, неправильный Логин')
}
