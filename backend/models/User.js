class User {

    constructor(name, email, password, role) {

        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role; // buyer or seller

    }

}

module.exports = User;