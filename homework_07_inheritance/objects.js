function configureProperty(object) {
  Object.keys(object).forEach((key) => {
    Object.defineProperty(object, key, {
      writable: false,
      enumerable: false,
      configurable: false
    });
  });
};

const animal = {
  name: "Неизвестное животное",
  eat() {
    console.log(`${this.name} ест...`);
  },
  say() {
    console.log("Неизвестное животное молчит...");
  },
  rename(name) {
    const regex = /^[А-Яа-я- ]+$/;

    if(regex.test(name) && name.trim().length) {
      Object.defineProperty(this, "name", {
        value: name
      });
    }
  }
};

configureProperty(animal);

const cat = {
  __proto__: animal,
  say() {
    console.log("Кот говорит мяу...");
  },
  hunt() {
    console.log(`${this.name} охотится...`);
  }
};

configureProperty(cat);

const dog = {
  __proto__: animal,
  say() {
    console.log("Собака говорит гав...");
  }
};

configureProperty(dog);

const parrot = {
  __proto__: animal,
  say() {
    console.log("Попугай говорит: 'Кто тут мяукает и гавкает?'...");
  }
};

configureProperty(parrot);
