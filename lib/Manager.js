const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, github) {
       super (name, id, email);
        this.officeNumber = this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
} 
// to be exported file
module.exports = Manager;
