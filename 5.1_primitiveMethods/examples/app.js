//Методы у примитивов


/*
Примитив

Это – значение «примитивного» типа.
Есть 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint.
Объект

Может хранить множество значений как свойства.
Объявляется при помощи фигурных скобок {}, например: {name: "Рома", age: 30}. В JavaScript есть и другие виды объектов: например, функции тоже являются объектами.*/


//Обьект-обёртка
let str = 'Примитив'        //str - примитив. В момент обращения к свойству, создается специальный обьект, который знает значение строки и имеет такие полезные методы как toUpperCase()

alert(str.toUpperCase())    //Этот метод запускает и возвращает новую строку, специальный обьект удаляется, оставляя только примитив str





//Еще один пример 

let str = 'Привет';

str.test = 5;         // Без строгого режима операция будет продолжена, обьект получит свойство test, но после этого он удаляется, так что на последней линии str уже без свойства test

alert(str.test)      //undefined без строго режим. В строгом режиме попытка изменения этого обьекта выдает ошибку.
 



//ВАЖНО!!! Все примитивы кроме null и undefined предостовляют множество полезных методов. У них нет соответствующих «объектов-обёрток», и они не имеют никаких методов.