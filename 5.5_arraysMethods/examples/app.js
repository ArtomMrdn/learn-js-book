//Методы массивов
// splice.  arr.splice(index[, deleteCount, elem1, ..., elemN]). Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
alert( arr ); // осталось ["Я", "JavaScript"]

//2й Пример

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr.splice(0, 3, "Давай", "танцевать"); // удалить 3 первых элемента и заменить их другими
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


//В следующем примере мы удалим 3 элемента и заменим их двумя другими.
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr.splice(0, 3, "Давай", "танцевать"); // удалить 3 первых элемента и заменить их другими
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


// Здесь видно, что splice возвращает массив из удалённых элементов:

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let removed = arr.splice(0, 2); // удалить 2 первых элемента
alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов


// Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:

let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

 
// Метод slice    arr.slice([start], [end]). Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end)
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)


// Метод concat  arr.concat(arg1, arg2...) создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
let arr = [1, 2];
// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


//Другие объекты, даже если они выглядят как массивы, добавляются как есть:
let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  length: 1
};
alert( arr.concat(arrayLike) ); // 1,2,[object Object]


//Поиск в массиве    indexOf/lastIndexOf и includes

/*
arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
Например:*/
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true



//find и findIndex
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});

/*
Функция вызывается по очереди для каждого элемента массива:
item – очередной элемент.
index – его индекс.
array – сам массив.
Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.

Например, у нас есть массив пользователей, каждый из которых имеет поля id и name. Попробуем найти того, кто с id == 1:*/
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
let user = users.find(item => item.id == 1);   //Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.
alert(user.name); // Вася



//filter  Синтаксис этого метода схож с find, но filter возвращает массив из всех подходящих элементов:

let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
}); //Например:

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2



//Преобразование массива 
// map    Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
}); //Например:
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6



//sort(fn)   Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов. Он возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.

let arr = [ 1, 2, 15 ];
// метод сортирует содержимое arr
arr.sort();
alert( arr );  // 1, 15, 2
//Для строк применяется лексикографический порядок, и действительно выходит, что "2" > "15".


//нам нужно предоставить функцию в качестве аргумента arr.sort(). Например, для сортировки чисел:
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15


//reverse Метод arr.reverse меняет порядок элементов в arr на обратный.
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1


//split и join   Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.

let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

//Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.
let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша


//reduce/reduceRight
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
/*
Аргументы:

previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив. */
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
