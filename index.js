const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const  teamRoster = {'Manager':[],'Engineer':[],'Intern':[]};
var position = '';
function initiateApp() {
    startHtml();

}

prompt({
    type: 'list',
    name: 'role',
    message: 'Which role would you like to pick?',
    choices: Object.keys(teamRoster)
}).then(({role}) => {
    position = role;
    let items = ['id','name','email'];
    items.push(role == 'Manager' ? 'officeNumber' : role == 'Engineer' ? 'Github' : 'school');
    questions = [];
    items.forEach(item => {
        questions.push({type:'input',name:item,message:`What is your ${item}?`})
    });
    prompt(questions).then(console.log('role: ',position));

});

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

