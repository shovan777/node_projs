var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Shovan',
  sayHi: () => { // this is an aarrow function
    console.log(
      `say hi to ${this.name}`
    );
  },
  sayHiAlt() { // this is a regular function
    console.log(
      `say hi to ${this.name}`
    );
    console.log(arguments);
  }
};

user.sayHiAlt(1 , 22);
