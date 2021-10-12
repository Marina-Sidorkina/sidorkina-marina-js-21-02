function configureProperty(object) {
  Object.keys(object).forEach((key) => {
    Object.defineProperty(object, key, {
      writable: false,
      configurable: false
    });
  });
};

// Animal

function Animal() {
  const animal = { say, eat, rename, getName };
  const name = "Неизвестное животное";

  function say() {
    console.log("Неизвестное животное молчит...");
  };

  function eat() {
    console.log(`${this.name || name} ест...`);
  };

  function rename(name) {
    const regex = /^[А-Яа-я- ]+$/;

    if(regex.test(name) && name.trim().length) {
      Object.defineProperty(this, "name", {
        value: name,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  };

  function getName() {
    console.log(this.name || name);
  }

  configureProperty(animal);

  return animal;
}

// Cat

function Cat() {
  const cat = Object.assign({}, new Animal, { say, hunt });

  function say() {
      console.log("Кот говорит мяу...");
  };

  function hunt() {
    console.log(`${this.name || name} охотится...`);
  };

  configureProperty(cat);

  return cat;
}

// Dog

function Dog() {
  const dog = Object.assign({}, new Animal, { say });

  function say() {
      console.log("Собака говорит гав...");
  };

  configureProperty(dog);

  return dog;
}

// Parrot

function Parrot() {
  const parrot = Object.assign({}, new Animal, { say });

  function say() {
      console.log("Попугай говорит: 'Кто тут мяукает и гавкает?'...");
  };

  configureProperty(parrot);

  return parrot;
}
