// Создай класс Cat
// добавь статическое поле count
// Необходимо, чтобы при создании объекта этого класса, поле count увеличивалось на 1
// то есть это поле будет у всего класса и оно будет содержать кол-во созданных объектов (котиков))
// PS у котиков должна быть кличка name

class Cat {
  static count = 0;
  constructor(name) {
    this.name = name;
    Cat.count++;
  }
}

// создай пару котиков
const cat1 = new Cat('Molly');
const cat2 = new Cat('Bonny');

// выведи значение поля count класса Cat
console.log(Cat.count);
