## 1. for (обычный цикл)

Используется для выполнения кода определённое количество раз.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Итерация:", i);
}
```

## 2. for...in (цикл по ключам объекта)

Используется для перебора ключей объекта.

```javascript
const obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
  console.log("Ключ:", key, "Значение:", obj[key]);
}
```

## 3. for...of (цикл по значениям массива)

Используется для перебора значений массива.

```javascript
const arr = [10, 20, 30];

for (let value of arr) {
  console.log("Значение:", value);
}
```

## 4. while (цикл с предусловием)

Используется, когда количество итераций заранее неизвестно, и нужно повторять выполнение кода, пока выполняется условие.

```javascript
let i = 0;
while (i < 5) {
  console.log("Итерация:", i);
  i++;
}
```

## 5. do...while (цикл с постусловием)

Гарантированно выполнится минимум один раз, так как проверка условия происходит после выполнения тела цикла.

```javascript
let j = 0;
do {
  console.log("Итерация:", j);
  j++;
} while (j < 5);
```

## 6. break (прерывание цикла)

Полностью останавливает выполнение цикла.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Выход из цикла при i === 5
  }
  console.log("Итерация:", i);
}
```

## 7. continue (пропуск итерации)

Пропускает текущую итерацию и переходит к следующей.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Пропускает четные числа
  }
  console.log("Итерация:", i);
}
```
