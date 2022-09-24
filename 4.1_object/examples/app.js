//Object

let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта" Обычно используют вариант 2


//Литералы и свойства   «ключ: значение»:
let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};
// получаем свойства объекта:
alert(user.name); // John
alert(user.age); // 30

delete user.age;  //Удаление свойства



//Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

//Объект, объявленный как константа, может быть изменён
const user = {
  name: "John"
};
user.name = "Pete"; // (*)

alert(user.name); // Pete


//Квадратные скобки



//Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает:

// это вызовет синтаксическую ошибку
user.likes birds = true

//Правильный вариант
let user = {};
user["likes birds"] = true; //присваивание значения свойству
alert(user["likes birds"]); // true получение значения свойства
delete user["likes birds"]; // удаление свойства



//Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения
let key = "likes birds";
user[key] = true; // то же самое, что и user["likes birds"] = true;

//Пример:
let user = {
  name: "John",
  age: 30
};
let key = prompt("Что вы хотите узнать о пользователе?", "name");
// доступ к свойству через переменную
alert( user[key] ); // John (если ввели "name")

//Через точку так не получится 



//Вычисляемые свойства
//можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства.

let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert( bag.apple ); // 5, если fruit="apple"
/*Смысл вычисляемого свойства прост: запись [fruit] означает, что имя свойства необходимо взять из переменной fruit.
И если посетитель введёт слово "apple", то в объекте bag теперь будет лежать свойство {apple: 5}.*/





//Свойство из переменной

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...другие свойства
  };
}

let user = makeUser("John", 30);
alert(user.name); // John


//Вместо name:name мы можем написать просто name:
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age   // то же самое, что и age: age
    // ...
  };
}

//Проверка существования свойства, оператор «in»

//При обращении к свойству, которого нет, возвращается undefined. Это позволяет просто проверить существование свойства:
let user = {};
let user = {};
alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

//Также существует специальный оператор "in" для проверки существования свойства в объекте.
let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует

//НО
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, имя свойства было взято из переменной key


//Цикл «for…in»
// Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}







