const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamRoster =[];

function initiateApp() {
    startHtml();

}
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?"               
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?"    
        },
    ])
}

function addEmployee() {
// Begin prompted questions for Employee
     inquirer.prompt([   
        {
            type: 'list',
            name: 'role',
            message: "Please pick employee position:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email address?"
        },
        {
            type: 'input',
            name: 'github', 
            message: "What is your employee's gitHub username?",
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school:",
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add additional teammates?',
            default: false
        }
    ])



    .then(teamInfo => {
        let { name, id, email, role, github, school, confirmAdd } = teamInfo;
        let employee;
        
        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee);                                
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);           
        }
        teamRoster.push(employee);
        if (confirmAdd) {
            return addEmployee(teamRoster);
        } else {
            return teamRoster;
        }
    })
};

// create function to write html file

const writeHtml = data => {
    fs.writeFile('./', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created!')
        }
    })
};

