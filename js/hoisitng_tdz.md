# Temporal Dead Zone (TDZ) и Hoisting в JavaScript

## Temporal Dead Zone (TDZ)

TDZ — это область блока, в которой переменная недоступна до момента её инициализации. JavaScript выдаст `ReferenceError`, если попытаться получить доступ к переменной до её инициализации.

### TDZ применима к следующим конструкциям:
1. **`let`**
2. **`const`**
3. **`class`**

### Пример TDZ:
```javascript
{
  // bestFood’s TDZ начинается здесь (в начале области видимости блока)
  // bestFood’s TDZ продолжается здесь
  console.log(bestFood); // ReferenceError, так как bestFood находится в TDZ
  // bestFood’s TDZ продолжается здесь
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ заканчивается здесь
  console.log(bestFood); // "Vegetable Fried Rice"
}
```

## Hoisting

Hoisting в JavaScript означает, что объявления функций и переменных обрабатываются перед выполнением кода. Это означает, что JavaScript даёт более высокий приоритет объявлению переменных, классов и функций во время выполнения программы.

### Применимо к:
1. **Function Declaration:** Объявления функций поднимаются, включая как имя функции, так и её тело. Вы можете вызвать функцию до её фактического объявления.
2. **`var`:** Объявления переменных поднимаются, но их инициализация остаётся на месте. Переменная будет `undefined` до её инициализации.

### Пример Function Declaration:
```javascript
greet(); // Работает, функция поднята вверх
function greet() {
  console.log("Hello!");
}
```

### Пример `var`:
```javascript
console.log(x); // undefined
var x = 10;
```
