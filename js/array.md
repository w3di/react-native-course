## Что такое массив?

- **Определение:** Массив — это список данных, который может хранить несколько значений в одной переменной.

## Почему массивы полезны?

- Удобно хранить данные одной категории.
- Легко работать с большими объемами данных.

## Синтаксис создания массива

```javascript
const myArray = []; // Пустой массив
const numbers = [1, 2, 3, 4, 5]; // Массив чисел
const mixed = ["текст", 42, true]; // Смешанный массив тип any[]
const strArr = ["one", "two", "three", "four", "five", "six"]; // Массив строк
const fruitArray = ["apple", "orange", "banan"];

const newArrayConstructor = new Array(4).fill(0) //[0,0,0,0]
console.log(numbers); // [1, 2, 3, 4, 5]
```

# Основные операции с массивами

## Доступ к элементам массива

Индексы массива начинаются с 0.

```javascript
const fruits = ["яблоко", "банан", "апельсин"];
console.log(fruits[0]); // яблоко
console.log(fruits[1]); // банан
```

## Изменение элементов массива

Пример изменения значения:

```javascript
const fruits = ["яблоко", "банан", "апельсин"];
fruits[1] = "груша";
console.log(fruits); // ['яблоко', 'груша', 'апельсин']
```

## Добавление и удаление элементов

### Добавление

- С помощью `push()` (в конец массива):

```javascript
const fruits = ["яблоко", "груша", "апельсин"];
fruits.push('ананас');
console.log(fruits); // ['яблоко', 'груша', 'апельсин', 'ананас']
```

- С помощью `unshift()` (в начало массива):

```javascript
const fruits = ["яблоко", "груша", "апельсин"];
fruits.unshift('виноград');
console.log(fruits); // ['виноград', 'яблоко', 'груша', 'апельсин']
```

### Удаление

- С помощью `pop()` (удаляет последний элемент):

```javascript
const fruits = ["виноград", "яблоко", "груша", "апельсин"];
fruits.pop();
console.log(fruits); // ['виноград', 'яблоко', 'груша']
```

- С помощью `shift()` (удаляет первый элемент):

```javascript
const fruits = ["виноград", "яблоко", "груша", "апельсин"];
fruits.shift();
console.log(fruits); // ['яблоко', 'груша', 'апельсин']
```

## Работа с длиной массива

### Свойство `.length`

Определяет количество элементов в массиве:

```javascript
const fruits = ['яблоко', 'груша', 'апельсин'];
console.log(fruits.length); // 3
```

### Пример применения

Добавление элемента в конец массива с использованием `.length`:

```javascript
const fruits = ['яблоко', 'груша', 'апельсин'];
fruits[fruits.length] = 'манго';
console.log(fruits); // ['яблоко', 'груша', 'апельсин', 'манго']
```
## Метод `map()`

Метод `map()` создает новый массив с результатом вызова указанной функции для каждого элемента массива.

Пример:

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(number) {
  return number * 2;
});
 const doubledShort = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(doubledShort); // [2, 4, 6, 8]
```

### Метод `forEach()`

Метод `forEach()` применяет указанную функции для каждого элемента массива, но ничего не возвращает;

Пример:

```javascript
const fruits = ['яблоко', 'груша', 'апельсин'];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```