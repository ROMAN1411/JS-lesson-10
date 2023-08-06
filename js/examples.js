console.log('---------------------Example 1 - Блогер-------------------------');
{
  // Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
  // email - пошта, рядок
  // age - вік, число
  // numberOfPosts - кількість постів, число
  // topics - масив тем на яких спеціалізується блогер
  // Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
  // Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.
  // Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

  class Blogger {
    constructor({ name, age, numberOfPosts, topics }) {
      // Ініціалізація властивостей екземпляра
      this.name = name;
      this.age = age;
      this.numberOfPosts = numberOfPosts;
      this.topics = topics;
    }

    getInfo() {
      return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
    }

    updatePostCount(value) {
      this.numberOfPosts = this.numberOfPosts += value;
    }
  }

  const mango = new Blogger({
    name: 'mango@mail.com',
    age: 24,
    numberOfPosts: 20,
    topics: ['tech', 'cooking'],
  });
  console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
  mango.updatePostCount(5);
  console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
  const poly = new Blogger({
    name: 'poly@mail.com',
    age: 19,
    numberOfPosts: 17,
    topics: ['sports', 'gaming', 'health'],
  });
  console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
  poly.updatePostCount(4);
  console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
}
console.log('---------------------Example 2 - Блогер-------------------------');
{
  // Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.
  // Додай методи класу:
  // getItems() - повертає масив товарів.
  // addItem(item) - отримує новий товар і додає його до поточних.
  // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

  class Storage {
    constructor(items) {
      this.items = items;
    }

    getItems() {
      return this.items;
    }

    addItem(item) {
      if (!this.items.includes(item)) {
        this.items.push(item);
        return;
      }
      console.log('Такий товар уже є!');
    }

    removeItem(item) {
      if (this.items.includes(item)) {
        this.items.splice(this.items.indexOf(item), 1);
        return;
      }
      console.log('Такий товар відсутній!');
    }
  }

  const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
  const items = storage.getItems();
  console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
  storage.addItem('🍌');
  storage.addItem('🍌');

  console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
  storage.removeItem('🍋');
  //   storage.removeItem('🍋');

  console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
}
console.log('---------------------Example 3 - User-------------------------');
{
  // Напиши клас User який створює об'єкт із властивостями login та email.
  // Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер
  // та сетер login та email.

  class User {
    #login;
    #email;
    constructor({ login, email }) {
      this.#login = login;
      this.#email = email;
    }

    get login() {
      return this.#login;
    }

    set login(newLogin) {
      if (this.#login !== newLogin) {
        this.#login = newLogin;
      }
    }

    get email() {
      return this.#email;
    }

    set email(newEmail) {
      if (this.#email !== newLogin) {
        this.#email = newLogin;
      }
    }
  }

  const mango = new User({
    login: 'Mango',
    email: 'mango@dog.woof',
  });
  console.log(mango.login); // Mango
  mango.login = 'Mangodoge';
  console.log(mango.login); // Mangodoge

  const poly = new User({
    login: 'Poly',
    email: 'poly@mail.com',
  });

  console.log(poly.login); // Poly
  poly.login = 'Polycutie';
  console.log(poly.login); // Polycutie
}
console.log('---------------------Example 4 - Нотатки------------------------');
{
  // Напиши клас Notes який керує колекцією нотаток у властивості items.
  // Замітка це об'єкт із властивостями text та priority.
  // Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.
  // {
  //   LOW: 'low',
  //   NORMAL: 'normal',
  //   HIGH: 'high'
  // }
  // Додай методи addNote(note), removeNote(text) та updateNote(text, newPriority).

  class Notes {
    static Priority = {
      LOW: 'low',
      NORMAL: 'normal',
      HIGH: 'high',
    };
    constructor(note) {
      this.items = note;
    }

    addNote(note) {
      const inArr = this.items.some(({ text }) => text === note.text);
      if (!inArr) {
        this.items.push(note);
      }
    }

    removeNote(text) {
      const idx 
    }
  }

  const myNotes = new Notes([]);

  myNotes.addNote({
    text: 'Моя перша замітка',
    priority: Notes.Priority.LOW,
  });
  myNotes.addNote({
    text: ['Моя перша замітка'],
    priority: Notes.Priority.LOW,
  });
  myNotes.addNote({
    text: 'Моя перша замітка',
    priority: Notes.Priority.LOW,
  });
  console.log(myNotes.items);

  myNotes.addNote({
    text: 'Моя друга замітка',
    priority: Notes.Priority.NORMAL,
  });
  console.log(myNotes.items);

  myNotes.removeNote('Моя перша замітка');
  console.log(myNotes.items);

  myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
  console.log(myNotes.items);
}
