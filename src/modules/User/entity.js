class UserEntity {
  constructor({
    id, name, email, password, type,
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }

  validate() {
    //if (!this.mail || !this.password || !this.name || !this.lastname || !this.address || !this.tel || !this.type) return false;
    return true;
  }

  validateLogin() {
    if (!this.mail || !this.password) return false;
    return true;
  }
}

export default UserEntity;
