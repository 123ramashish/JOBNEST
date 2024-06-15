export default class userModel {
  constructor(id, name, email, contact) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.contact = contact;
  }

   getUsers() {
    return users;
  }

   addUser(name, email, contact) {
    // Assuming some validation is performed before adding the user
    const newUser = new userModel(users.length + 1, name, email, contact);
    users.push(newUser);
    return newUser;
  }
}

const users = [];
