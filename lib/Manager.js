const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;        
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

    getOfficeNumber () {
        return this.officeNumber;
    }

};  
// to be exported file
module.exports = Engineer;
