function setusername(username, userId) {
  // Complex db calls
  this.username = username;
  this.userId = userId;
  console.log("called");
}

function createuser(username, email, password, userId) {
  this.email = email;
  this.password = password;
  setusername.call(this, username, userId);
}

const coffee = new createuser("bhavik", "rldkkoak@.com", "321", "2310");
console.log(coffee);
