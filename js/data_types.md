# Типы данных в JavaScript

## Примитивные типы

Примитивные типы данных в JavaScript включают:

- `Number`
- `BigInt`
- `String`
- `Symbol`
- `Boolean`
- `Undefined`
- `Null`

### Общие характеристики примитивных типов

- **Иммутабельность:** Примитивы неизменяемы. Например, если вы изменяете строку, создается новая строка, а не изменяется существующая.
- **Сравнение по значению:** Примитивные значения сравниваются по значению, а не по ссылке.
- **Автоматическое создание временных объектов:** Для доступа к методам строк и чисел JavaScript создает временные объектные обертки, которые уничтожаются сразу после использования.
- **Хранят свои значения непосредственно:** Если вы присваиваете переменной значение примитивного типа, переменная содержит само значение.
- **Типовые преобразования:** Примитивные типы могут быть автоматически преобразованы в другие типы, например, строка может быть преобразована в число при необходимости.

### Number

- **Представление:** Числа с плавающей запятой двойной точности (64 бита, IEEE 754).
- **Диапазон:** Примерно от `-1.7976931348623157 × 10^308` до `1.7976931348623157 × 10^308`.
- **Проблемы:** Потери точности при работе с дробными числами, `0.1 + 0.2` не равно `0.3`.
- **Специальные значения:** `Infinity`, `-Infinity`, `NaN`.

```javascript
const one = 1;
const exampleValue = 294834349;
const minusValue = -9;

console.log(one, exampleValue, minusValue);

console.log(
  one + " is " + typeof one,
  "||",
  exampleValue + " is " + typeof exampleValue,
  "||",
  minusValue + " is " + typeof minusValue
);
```

### NaN

- **Значение:** Специальное значение, представляющее результат неудачных попыток преобразовать данные в число или операции, в которых результат не определен как число.

```javascript
console.log(typeof NaN); // number
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN
```

### Infinity

- **Значение:** Математическая бесконечность. При делении числа на 0 (или на отрицательное число 0) получаем `Infinity` или `-Infinity`, соответственно.

```javascript
console.log(typeof Infinity); // number
console.log(Infinity); // Infinity
console.log(1 / 0); // Infinity
console.log(-Infinity); // -Infinity
console.log(-1 / 0); // -Infinity
```

### String

- **Представление:** UTF-16 последовательность символов, что означает, что каждый символ может занимать 16 бит.
- **Шаблонные строки:** Позволяют использовать выражения внутри строки (интерполяция) и многострочные строки.

```javascript
const imString = "example string";
const imAnotherString = "я какая-то строчка";
const imAnotherOneString = "а";
const imStringWithTrue = "true";
const imStringWithNumber = "234";
const imStringWithChar = ".";

const combinedStringWithTemplateLiterals = `${imString} | ${imAnotherString} | ${imAnotherOneString} | ${imStringWithTrue} | ${imStringWithNumber} | ${imStringWithChar}`;

console.log(combinedStringWithTemplateLiterals);
```

### Boolean

- **Представление:** Логические значения `true` и `false`.
- **Использование:** Управление потоком выполнения (условные операторы, логические операции).

```javascript
const exampleTrueBoolean = true;
const exampleFalseBoolean = false;
```

### Undefined

- **Представление:** Значение переменной, которая не была инициализирована.
- **Использование:** По умолчанию возвращается для неинициализированных переменных, возвращается функциями без явного `return`.

```javascript
let exampleUndefined;
let anotherExampleUndefined = undefined;
console.log(exampleUndefined); // undefined
```

### Null

- **Представление:** Намеренное отсутствие значения или объекта.
- **Использование:** Явное указание на пустоту, инициализация переменных до присвоения реальных значений.

```javascript
const exampleNull = null;
```

## Объектные типы

Объектные типы данных в JavaScript включают:

- `Object`
- `Array`
- `Function`
- `Date`
- `RegExp`
