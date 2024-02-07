// let user1 = "Bhavik     ";
// let user2 = "Rakesh    ";

// console.log(user1.trueLength);

const heroes = ["thor", "ironman"];

let heroespower = {
  thor: "thunder",
  ironman: "sharp brain",

  getheroespower: function () {
    {
      console.log(`power of thor is ${this.thor}`);
    }
  },
};

Object.prototype.bhavik = function () {
  console.log(`Hi everyone`);
};

heroespower.getheroespower();
heroespower.bhavik();

Array.prototype.heybhavik = function () {
  console.log(`hello everyone I am array`);
};

heroes.heybhavik();
// Object.heybhavik();

// Inheritance

const user = {
  username: "Bhavik",
  email: "bhaviksharma@gmail.com",
};
const teacher = {
  makevideo: true,
};

const student = {
  study: true,
};

const peon = {
  working: false,
  __proto__: teacher,
};

teacher.__proto__ = student;

//Modern syntax :-
Object.setPrototypeOf(peon, teacher);

let anotherusername = "bhavik sharma    ";

String.prototype.trueLength = function () {
  // console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True Length is ${this.trim().length}`);
};

anotherusername.trueLength();
user.trueLength();
