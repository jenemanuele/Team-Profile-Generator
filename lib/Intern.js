const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;        
    }  
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }


    getEmail() {
        return this.email;
    } 

    getSchool () {
        return this.school;
    }

};  
// to be exported file
module.exports = Intern;
