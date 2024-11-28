{
  const person = {
    name: "Иван", // Ключ "name", значение "Иван" //cвойство
    age: 25, // Ключ "age", значение 25
    isStudent: true, // Ключ "isStudent", значение true

    sayHello: function () {
      //метод
      console.log("Привет, я " + this.name);
    },
  };

  const exmaple = person;

  exmaple.name = "Лариса";

  person.sayHello();
}
