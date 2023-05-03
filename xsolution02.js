// Возьми класс Horse из предыдущего задания
// и добавь ему метод info,
// который выводит информацию по объекту в таком виде:
// "Привет! Я - name, мой возраст: age"
// (вместо name и age должны подставляться данные объекта)
class Horse {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Привет! Я - ${this.name}, мой возраст: ${this.age}`);
  }
}

// Создай пару объектов этого класса с разными данными
const horse1 = new Horse('Buran', 10);
const horse2 = new Horse('Pony', 3);

// Вызови на каждом объекте метод info
horse1.info();
horse2.info();
