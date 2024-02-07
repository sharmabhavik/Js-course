class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Here username is : ${this.username}`);
  }

  static createId() {
    return `234`;
  }
}

class teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const bhavik = new user("Bhavik");
// console.log(bhavik.createId());

const semester = new teacher("Shraddha", "shraddha34@py.hom");
semester.logMe();