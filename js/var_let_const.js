// Существует три способа объявления переменных:

//Объявляет переменную, которая имеет функциональную область видимости (или глобальную, если не находится в функции) и может быть переопределена.

{
  //var
  // - **Функциональная область видимости:** Переменные, объявленные с `var`, видимы в пределах функции, игнорируя блочную область видимости. Если `var` объявлен вне функции, он становится глобальным. Это происходит потому, что на заре развития JavaScript блоки кода не имели лексического окружения. Можно заабузить IIFY
  // - **Всплытие (Hoisting):** Переменные `var` всплывают в начало своей области видимости, что позволяет использовать их до объявления, но их значение будет `undefined` до присваивания.
  // - **Повторное объявление:** Переменные `var` можно объявлять несколько раз в одной области видимости.
  var imVar = "im var variant value";
  imVar = "im another value of imVar";
}
console.log(imVar);

{
  //let и const
  // - **Блочная область видимости:** что означает, что они доступны только внутри блока, в котором были объявлены
  // - **Temporal Dead Zone** `let` и `const` поднимаются (hoisting), но остаются в "Temporal Dead Zone" (TDZ) до фактического выполнения их объявления. Это означает, что доступ к переменным до их объявления вызовет ошибку (ReferenceError), в отличие от `var`, который инициализируется как `undefined` при подъеме.

  {
    //let
    // - Переменная, объявленная с `let`, может быть переприсвоена позже.
    // - Переменная может быть объявлена без начального значения, инициализация может произойти позже.
    // - Допускается изменение типа данных переменной.
    let imLet = "im let variant value";
    imLet = "im another value of imVar";
  }

  {
    //const
    // - Переменная, объявленная с `const`, не может быть переприсвоена.
    // - Обязательная инициализация при объявлении.
    // - Смена типа данных переменной невозможна, но можно изменять свойства объекта, если `const` ссылается на объект.
    const imConst = "im const variatn value";
  }
}