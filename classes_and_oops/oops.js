//Object Literals
const user = {
  username: "Bhavik",
  userId: 78,
  signedIn: true,

  getUsers: function () {
    console.log("I am Back");
    console.log(`Username : ${this.username}`);
  },
};
console.log(user.getUsers());
console.log(this);

// Constructor
function User(username, userId, isLoggedIn) {
  this.username = username;
  this.userId = userId;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("Hrithik", 41, true);
const usertwo = new User("Rakesh", 81, false);

console.log(userOne);
console.log(usertwo);

