// Возьми класс Horse из предыдущего задания
class Horse {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Привет! Я - ${this.name}, мой возраст: ${this.age}`);
  }
}

// Создай класс Pegas, который наследуется от Horse
// и имеет метод fly, который выводит в консоль: 'Я лечууу!'
class Pegas extends Horse {
  fly() {
    console.log('Я лечууу!');
  }
}

// Создай объект класса Horse и объект класса Pegas
const horse = new Horse('Buran', 10);
const pegas = new Pegas('Pegas', 3);

// Вызови на каждом объекте метод info
horse.info();
pegas.info();

// Вызови на каждом объекте, где это получится, метод fly
pegas.fly();

// Добавь оба объекта в массив
const animals = [horse, pegas];

// Пройдись по массиву циклом и вызови на объектах метод info,
// а если объект - является объектом класса Pegas, то вызови ещё и метод fly
animals.forEach((item) => {
  item.info();
  if (item instanceof Pegas) {
    item.fly();
  }
});
