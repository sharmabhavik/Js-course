// function multipleby5(num) {
//   return num * 5;
// }

// console.log(multipleby5(4));
// console.log(multipleby5.prototype);

// multipleby5.power = 2;
// console.log(multipleby5.power);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  console.log(` Price of taj is ${this.score}`);
};

createUser.prototype.printMe = function () {
  console.log(` Price of taj is ${this.score}`);
};

const chai = new createUser("Taj", 500);
const coffee = createUser("Nescafe", 600);

chai.printMe();
chai.increment();

coffee.printMe();
coffee.increment();