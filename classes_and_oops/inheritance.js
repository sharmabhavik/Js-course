class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, userId, password) {
    super(username);
    this.userId = userId;
    this.password = password;
  }

  addcourse() {
    console.log(`This is the username ${this.username}`);
  }
}

const college = new teacher("Vaishali", "321", "82f");
college.addcourse();

const university = new user("raju");
university.logMe();
// university.addcourse();

college.logMe();

console.log(college === teacher);
console.log(teacher === user);
console.log(user instanceof teacher);
console.log(teacher instanceof user);

console.log(college instanceof user);
console.log(college instanceof teacher);
console.log(university instanceof user);
