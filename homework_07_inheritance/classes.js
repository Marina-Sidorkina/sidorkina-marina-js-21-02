class Animal {
  constructor() {
    this._name = "Неизвестное животное";
  }

  _eat() {
    console.log(`${this._name} ест...`);
  };

  _say() {
    console.log("Неизвестное животное молчит...");
  };

  _rename(name) {
    const regex = /^[А-Яа-я- ]+$/;

    if(regex.test(name) && name.trim().length) {
      this._name = name;
    }
  }

  get name() {
    console.log(this._name);
  }

  get eat() {
    return this._eat;
  }

  get say() {
    return this._say;
  }

  get rename() {
    return this._rename;
  }
}

class Cat extends Animal {
  _say() {
    console.log("Кот говорит мяу...");
  };

  _hunt() {
    console.log(`${this._name} охотится...`);
  };

  get hunt() {
    return this._hunt;
  }
}

class Dog extends Animal {
  _say() {
    console.log("Собака говорит гав...");
  };
}

class Parrot extends Animal {
  _say() {
    console.log("Попугай говорит: 'Кто тут мяукает и гавкает?'...");
  };
}
