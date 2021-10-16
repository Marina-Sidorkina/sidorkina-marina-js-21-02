// Реализация через функции-конструкторы

// Animal

function Animal() {
  Object.defineProperties(this, {
    _name: {
      value: "Животное без клички",
      writable: true
    },
    name: {
      get: function() {
        console.log(this._name);
      },
      enumerable: false,
      configurable: false
    },
    _say: {
      value: function() {
        console.log("Неизвестное животное молчит...");
      },
      writable: true,
      enumerable: false,
      configurable: false
    },
    say: {
      get: function() {
        return this._say
      }
    },
    eat: {
      value: function() {
        console.log(`${this._name} ест...`);
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
    rename: {
      value: function(name) {
        const regex = /^[А-Яа-я- ]+$/;

        if(regex.test(name) && name.trim().length) {
          Object.defineProperty(this, "_name", {
            value: name,
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
  });
}

// Cat

function Cat() {
  Animal.call(this);

  Object.defineProperties(this, {
    _say: {
      value: function() {
        console.log("Кот говорит мяу...");
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
    hunt: {
      value: function() {
        console.log(`${this._name} охотится...`);
      },
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}

// Dog

function Dog() {
  Animal.call(this);

  Object.defineProperties(this, {
    _say: {
      value: function() {
        console.log("Собака говорит гав...");
      },
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}

// Parrot

function Parrot() {
  Animal.call(this);

  Object.defineProperties(this, {
    say: {
      value: function() {
        console.log("Попугай говорит: 'Кто тут мяукает и гавкает?'...");
      },
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}
