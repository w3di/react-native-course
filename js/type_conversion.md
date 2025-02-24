# Преобразование типов в JavaScript

Преобразование типов в JavaScript включает преобразование значений из одного типа в другой. Это можно сделать явно с помощью различных функций и методов или неявно, когда JavaScript автоматически преобразует значения при выполнении операций, требующих другого типа.

## Явное преобразование типов

Явное преобразование типов происходит, когда вы вручную преобразуете значение из одного типа в другой с помощью встроенных функций и методов.

### Преобразование в строку

Преобразование в строку включает преобразование значений различных типов данных в строку.

#### Использование функции `String()`

Функция `String()` преобразует значение в строку.

```javascript
let exampleValue = 42;
console.log(typeof exampleValue, exampleValue); // number 42

exampleValue = String(exampleValue);
console.log(typeof exampleValue, exampleValue); // string "42"

console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({})); // "[object Object]"
console.log(String([])); // ""
```

#### Использование метода `toString()`

Метод `toString()` вызывается у объектов для их преобразования в строку.

```javascript
console.log((42).toString()); // "42"
console.log(true.toString()); // "true"
console.log([1, 2, 3].toString()); // "1,2,3"
```

### Преобразование в число

Преобразование в число включает преобразование значений различных типов данных в число.

#### Использование функции `Number()`

Функция `Number()` преобразует значение в число.

```javascript
console.log(Number("42")); // 42
console.log(Number("42.5")); // 42.5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
```

#### Использование функций `parseInt()` и `parseFloat()`

Функция `parseInt()` парсит строку и возвращает целое число, а `parseFloat()` парсит строку и возвращает число с плавающей точкой.

```javascript
console.log(parseInt("42")); // 42
console.log(parseInt("42.5")); // 42
console.log(parseFloat("42.5")); // 42.5
```

### Преобразование в логическое значение

Преобразование в логическое значение включает преобразование значений различных типов данных в логическое значение.

#### Использование функции `Boolean()`

Функция `Boolean()` преобразует значение в логическое.

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true
```

## Неявное преобразование типов

Неявное преобразование типов, также известное как приведение типов, происходит, когда JavaScript автоматически преобразует значения из одного типа в другой при выполнении операций, требующих другого типа.

### Преобразование в строку

При использовании оператора `+` со строками и другими типами данных JavaScript автоматически преобразует другие значения в строки.

```javascript
console.log("Ответ: " + 42); // "Ответ: 42"
console.log("42" + true); // "42true"
console.log("42" + null); // "42null"
console.log("42" + undefined); // "42undefined"
```

### Преобразование в число

При использовании арифметических операторов (кроме `+`) с нечисловыми типами JavaScript автоматически преобразует другие значения в числа.

```javascript
console.log("42" - 10); // 32
console.log("42" * 2); // 84
console.log("42" / 2); // 21
console.log("42" - true); // 41
console.log("42" - null); // 42
console.log("42" - undefined); // NaN
```

### Преобразование в логическое значение

В логических операциях JavaScript автоматически преобразует значения в логические.

```javascript
console.log(!!"hello"); // true
console.log(!!""); // false
console.log(!!42); // true
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!{}); // true
console.log(!![]); // true
```

### Значения которые при преобразовании будут false, в остальных случаях true:
- `0`
- `null`
- `undefined`
- `NaN`
- `""` 
