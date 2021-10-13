class Animal {
  constructor() {
    this._name = "Неизвестное животное";
    this._type = false;
  }

  eat() {
    console.log(`${this._name} ест...`);
  };

  say() {
    console.log("Неизвестное животное молчит...");
  };

  set name(name) {
    const regex = /^[А-Яа-я- ]+$/;

    if(regex.test(name) && name.trim().length && this._type) {
      this._name = name;
    }
  };

  get name() {
    return this._name;
  }
}

class Cat extends Animal {
  constructor() {
    super();
    this._type = true;
  };

  say() {
    console.log("Кот говорит мяу...");
  };

  hunt() {
    console.log(`${this._name} охотится...`);
  };
}

class Dog extends Animal {
  constructor() {
    super();
    this._type = true;
  };

  say() {
    console.log("Собака говорит гав...");
  };
}

class Parrot extends Animal {
  constructor() {
    super();
    this._type = true;
  };

  say() {
    console.log("Попугай говорит: 'Кто тут мяукает и гавкает?'...");
  };
}
