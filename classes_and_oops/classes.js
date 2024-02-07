// class user {
//   constructor(username, userId, password) {
//     this.username = username;
//     this.userId = userId;
//     this.password = password;
//   }

//   encryptionpassword(password) {
//     return `${this.password}dsa`;
//   }

//   changeusername(username) {
//     console.log(
//       `The username in uppercase letters are ${this.username.toUpperCase()}`
//     );
//   }
// }

// const college = new user("Bhavik", "21", "201");
// console.log(college);
// console.log(college.encryptionpassword());
// console.log(college.changeusername());

// Behind the scenes: Inshort without classes how that can be done

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptfunction = function () {
  return `${this.password}dsa`;
};

user.prototype.changeusername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("Bhavik", "44", "5235");
console.log(tea.encryptfunction());
console.log(tea.changeusername());
