const auther = [];

export default class authModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  getAuth(){
    return auther;
  }
  addAuth(name, email, password) {
    const newauth = new authModel(
      auther.length + 1 ,
      name,
      email,
      password
    );
    auther.push(newauth);
    return newauth;
  }
}
