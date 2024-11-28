//*  Работа с числами (Number)
// Округление:

// Math.round(num) – округление до ближайшего целого.
// Math.floor(num) – округление вниз.
// Math.ceil(num) – округление вверх.
// Math.trunc(num) – убирает дробную часть.
// Генерация случайного числа:

// Math.random() – случайное число от 0 до 1.
// Математические операции:

// Math.max(a, b, ...) / Math.min(a, b, ...) – наибольшее/наименьшее из списка.
// Math.pow(base, exp) – возведение в степень.
// Math.sqrt(num) – квадратный корень.
// Преобразования:

// Number.parseInt(str) – преобразует строку в целое число.
// Number.parseFloat(str) – преобразует строку в число с плавающей точкой.
// num.toFixed(digits) – округляет число до указанного количества знаков после запятой (возвращает строку).

//*  Работа с числами (Number)
// Округление:
// javascript
// Копировать код
// console.log(Math.round(4.5)); // 5
// console.log(Math.floor(4.5)); // 4
// console.log(Math.ceil(4.5)); // 5
// console.log(Math.trunc(4.5)); // 4
// Генерация случайного числа:
// javascript
// Копировать код
// console.log(Math.random()); // Например: 0.675312

// Математические операции:

// console.log(Math.max(1, 5, 10, 99)); // 10
// console.log(Math.min(1, 5, 10, 0, -10)); // 1
// console.log(Math.pow(2, 4)); // 8
// console.log(Math.sqrt(38)); // 4

// Преобразования:

// console.log(Number.parseInt("42px")); // 42
// console.log(Number.parseFloat("42.5px")); // 42.5
//console.log((5.56589).toFixed(2)); // "5.57"

//*  Работа со строками (String)
// Получение длины:
// const example = "hello";
// console.log(example.to);
// str.length – длина строки.
// Преобразование регистра:

// str.toUpperCase() – в верхний регистр.
// str.toLowerCase() – в нижний регистр.

// Поиск:

// str.indexOf(substr) – индекс первого вхождения подстроки.
// str.lastIndexOf(substr) – индекс последнего вхождения.
// str.includes(substr) – проверяет, содержит ли строка подстроку (возвращает true/false).
// str.startsWith(substr) / str.endsWith(substr) – проверяет начало/конец строки.
// console.log(str.indexOf("l"));    // 2
// console.log(str.lastIndexOf("l")); // 3
// console.log(str.includes("lo")); // true
// console.log(str.startsWith("He")); // true
// console.log(str.endsWith("o"));   // true
// Извлечение подстроки:

// str.slice(start, end) – извлекает часть строки.
// str.substring(start, end) – извлекает подстроку.
// str.substr(start, length) – извлекает подстроку заданной длины (устарело).
// Модификация:

// str.trim() – убирает пробелы в начале и конце строки.
// str.replace(substr, newSubstr) – заменяет подстроку.
// str.split(delimiter) – разделяет строку на массив по разделителю.

//* Работа со строками (String)
// Получение длины:
// javascript
// Копировать код
// let str = "Hello";
// console.log(str.length); // 5
// Преобразование регистра:
// javascript
// Копировать код
// console.log(str.toUpperCase()); // "HELLO"
// console.log(str.toLowerCase()); // "hello"
// Поиск:
// javascript
// Копировать код
// console.log(str.indexOf("l"));    // 2
// console.log(str.lastIndexOf("l")); // 3
// console.log(str.includes("lo")); // true
// console.log(str.startsWith("He")); // true
// console.log(str.endsWith("o"));   // true
// Извлечение подстроки:
// javascript
// Копировать код
// console.log(str.slice(1, 4));       // "ell"
// console.log(str.substring(1, 4));   // "ell"
// console.log(str.substr(1, 3));      // "ell" (устарело)
// Модификация:
// javascript
// Копировать код
// let strWithSpaces = "  Hello World  ";
// console.log(strWithSpaces.trim()); // "Hello World"

// console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

// console.log(str.split("")); // ["H", "e", "l", "l", "o"]

//*new Date() – текущая дата и время.
// new Date(ms) – дата на основе миллисекунд с 1970 года.
// new Date("YYYY-MM-DD") – создание даты из строки.
// Получение частей даты:

// date.getFullYear() – год.
// date.getMonth() – месяц (0–11).
// date.getDate() – день месяца.
// date.getDay() – день недели (0–6).
// date.getHours(), date.getMinutes(), date.getSeconds() – время.
// Преобразование:

// date.toISOString() – дата в формате ISO.
// date.toLocaleString() – локализованный формат даты и времени.
// Изменение даты:

// date.setFullYear(year) – изменить год.
// date.setMonth(month) – изменить месяц.
// date.setDate(day) – изменить день.

// let now = new Date();
// console.log(now); // Текущая дата и время

// let specificDate = new Date(0);
// console.log(specificDate); // 1970-01-01T00:00:00.000Z

// let stringDate = new Date("2024-11-19");
// console.log(stringDate); // 2024-11-19T00:00:00.000Z
// Получение частей даты:
// javascript
// Копировать код
// console.log(now.getFullYear());  // Например: 2024
// console.log(now.getMonth());     // 10 (Ноябрь, так как месяцы от 0)
// console.log(now.getDate());      // 19
// console.log(now.getDay());       // 2 (вторник)
// console.log(now.getHours());     // Часы
// console.log(now.getMinutes());   // Минуты
// console.log(now.getSeconds());   // Секунды
// Преобразование:
// javascript
// Копировать код
// console.log(now.toISOString());      // "2024-11-19T12:00:00.000Z"
// console.log(now.toLocaleString());   // Локализованный формат
// Изменение даты:
// javascript
// Копировать код
// now.setFullYear(2025);
// console.log(now.getFullYear()); // 2025

// now.setMonth(0);
// console.log(now.getMonth()); // 0 (январь)

// now.setDate(1);
// console.log(now.getDate()); // 1
