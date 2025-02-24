# Области видимости в JavaScript

## Виды областей видимости

1. **Глобальная область видимости (Global Scope)**
2. **Функциональная область видимости (Function Scope)**
3. **Блочная область видимости (Block Scope)**
4. **Лексическая область видимости (Lexical Scope)**
5. **Module scope**

## Глобальная область видимости (Global Scope)

Это область видимости, которая охватывает весь код, за пределами функций и блоков. Все переменные и функции, объявленные в глобальной области видимости, доступны везде в вашем коде.

### Пример глобальной области видимости:
```javascript
let globalVal = "I am global";

function showGlobal() {
  console.log(globalVal); // "I am global"
}
showGlobal();
```

## Функциональная область видимости (Function Scope)

Переменные, объявленные внутри функции, видны только внутри этой функции. Они не доступны за её пределами.

### Пример функциональной области видимости:
```javascript
function example() {
  let funcVar = "I am local to this function";
  console.log(funcVar); // "I am local to this function"
}
example();
console.log(funcVar); // ReferenceError: funcVar is not defined
```

## Блочная область видимости (Block Scope)

Введён в ES6 с помощью `let` и `const`. Переменные, объявленные с помощью `let` или `const` внутри блока кода (например, внутри `{}`), видны только в этом блоке.

### Пример блочной области видимости:
```javascript
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // "I am block-scoped"
}

console.log(blockVar); // ReferenceError: blockVar is not defined
```

## Лексическая область видимости (Lexical Scope)

Лексическая область видимости определяется местом, где переменная была объявлена в исходном коде. Вложенные функции имеют доступ к переменным своих внешних функций.

### Пример лексической области видимости:
```javascript
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // "I am outer"
  }
  inner();
}
outer();
```

## Module scope

Переменные и функции, объявленные внутри модуля, не видны за его пределами. Это позволяет избежать загрязнения глобальной области видимости.

### Пример module scope:
```javascript
// module.js
export const moduleVar = "I am module-scoped";

// main.js
import { moduleVar } from './module.js';
console.log(moduleVar); // "I am module-scoped"
```
