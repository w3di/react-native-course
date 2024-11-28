//Виды областей видимости
// - Глобальная область видимости (Global Scope)
// - Функциональная область видимости (Function Scope)
// - Блочная область видимости (Block Scope)
// - Лексическая область видимости (Lexical Scope) clousers
// - Module scope

// Global Scope
// Это область видимости, которая охватывает весь код, за пределами функций и блоков. Все переменные и функции, объявленные в глобальной области видимости, доступны везде в вашем коде.
{
  let globalVal = "I am global";

  function showGlobal() {
    console.log(globalVal); // "I am global"
  }
  showGlobal();
}

//Function Scope
// Переменные, объявленные внутри функции, видны только внутри этой функции. Они не доступны за её пределами.
{
  function example() {
    let funcVar = "I am local to this function";
    console.log(funcVar); // "I am local to this function"
  }
  example();
  console.log(funcVar); // ReferenceError: funcVar is not defined`
}

//Block Scope
// Введён в ES6 с помощью `let` и `const`. Переменные, объявленные с помощью `let` или `const` внутри блока кода (например, внутри `{}`), видны только в этом блоке.
{
  if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // "I am block-scoped"
  }

  console.log(blockVar); // ReferenceError: blockVar is not defined
}
