function getFoo() {
  this.greeting = 'Global Hello World!';

  const foo = {
    gretting: 'Hello World!',
    printGreet() {
      console.log(this.greeting);
    },
    printGreetArrow: () => {
      console.log(this.greeting);
    },
  };

  return foo;
}

const foo = new getFoo();

foo.printGreet();
foo.printGreetArrow();
// Explain the 2 above prints

const printGreet = foo.printGreet;
// printGreet();
// Explain and give a way to solve this.
