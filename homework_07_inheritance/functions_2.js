// Animal

function Animal() {
  const name = "Животное без клички";

  return function() {

    Object.defineProperties(this, {
      say: {
        value: function() {
          console.log("Неизвестное животное молчит...");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      eat: {
        value: function() {
          console.log(`${this.name || name} ест...`);
        },
        writable: false,
        enumerable: false,
        configurable: false
      },
      rename: {
        value: function(name) {
          const regex = /^[А-Яа-я- ]+$/;

          if(regex.test(name) && name.trim().length && this.type) {
            Object.defineProperty(this, "name", {
              value: name
            });
          }
        },
        writable: false,
        enumerable: false,
        configurable: false
      },
    });
  }
};

// Cat

function Cat() {
  const parent = new Animal();
  parent.call(this);

  Object.defineProperties(this, {
    say: {
      value: function() {
        console.log("Кот говорит мяу...");
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
    hunt: {
      value: function() {
        console.log(`${this.name} охотится...`);
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
    type: {
      value: true,
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}

// Dog

function Dog() {
  const parent = new Animal();
  parent.call(this);

  Object.defineProperties(this, {
    say: {
      value: function() {
        console.log("Собака говорит гав...");
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
    type: {
      value: true,
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}

// Parrot

function Parrot() {
  const parent = new Animal();
  parent.call(this);

  Object.defineProperties(this, {
    say: {
      value: function() {
        console.log("Попугай говорит: 'Кто тут мяукает и гавкает?'...");
      },
      writable: false,
      enumerable: false,
      configurable: false
    },
    type: {
      value: true,
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}
