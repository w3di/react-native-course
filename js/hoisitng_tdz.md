//Temporal Dead Zone (TDZ) — это область блока, в которой переменная недоступна до момента ее инициализации.

// JavaScript выдаст `ReferenceError`, если попытаться получить доступ к переменной до ее инициализации.

// ### TDZ применима к следующим конструкциям:
// 1. **`let`**
// 2. **`const`**
// 3. **`class`**

Example: {
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}

//Поднятие (hoisting)** в JavaScript означает, что объявления функций и переменных обрабатываются перед выполнением кода.
//Поднятие означает, что JavaScript дает более высокий приоритет объявлению переменных, классов и функций во время выполнения программы.
//Подъем заставляет компьютер обрабатывать объявления раньше любого другого кода.
//Примечание: Поднятие не означает, что JavaScript перестраивает или перемещает код друг над другом.
//Подъем просто придает большую специфичность декларациям JavaScript. Таким образом, он заставляет компьютер сначала читать и обрабатывать декларации, прежде чем анализировать любой другой код в программе.
// Применимо к:
// 1. **Function Declaration:** Объявления функций поднимаются, включая как имя функции, так и её тело. Вы можете вызвать функцию до её фактического объявления.

Example: {
  greet(); // Работает, функция поднята вверх
  function greet() {
    console.log("Hello!");
  }
}

// 2. **`var`:** Объявления переменных поднимаются, но их инициализация остаётся на месте. Переменная будет `undefined` до её инициализации.
Example: {
  console.log(x); // undefined
  var x = 10;
}
