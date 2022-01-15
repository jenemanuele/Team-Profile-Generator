const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const  teamRoster = {'Manager':[],'Engineer':[],'Intern':[]};
var position = '';


//?????????????????
prompt({
    type: 'list',
    name: 'role',
    message: 'Which role would you like to pick?',
    choices: Object.keys(teamRoster)
}).then(({role}) => {
    position = role;
    let items = ['name','id','email'];
    items.push(role == 'Manager' ? 'officeNumber' : role == 'Engineer' ? 'Github' : 'school');
    questions = [];
    items.forEach(item => {
        questions.push({type:'input',name:item,message:`What is your ${item}?`})
    });
    prompt(questions).then(answers => {
               
        if (role === 'Manager') {
            const manager = new Manager(answers.name, answers.id, answers.email);
            teamRoster.Manager.push(manager)
        } 
        if (role === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email);
            teamRoster.Engineer.push(engineer)
        }
        if (role === 'Intern') {
            const intern = new Intern(answers.name, answers.id, answers.email);
            teamRoster.Intern.push(intern)
        }
       console.log(teamRoster);
    });
   
    
});


// create function to write html file **const writeHtml = data =>

const writeHtml = teamRoster => {
    fs.writeFile('./dist/index.html', teamRoster, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created!')
        }
    })

writeHtml();
};

