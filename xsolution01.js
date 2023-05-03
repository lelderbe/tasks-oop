// Создай класс Horse
// он должен содержать поля: name, age
class Horse {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Создай пару объектов этого класса с разными данными
const horse1 = new Horse('Buran', 10);
const horse2 = new Horse('Pony', 3);

// Выведи их в консоль
console.log(horse1);
console.log(horse2);
