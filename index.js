const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


const generatePage = require('./src/generatePage');

const { stringify } = require('querystring');
const  teamRoster = {'Manager':[],'Engineer':[],'Intern':[]};
var position = '';


prompt([
    {
    type: 'list',
    name: 'role',
    message: 'Which role would you like to pick?',
    choices: Object.keys(teamRoster)
}
])
.then(({role}) => {
    // build the questions list
    position = role;
    let items = ['name','id','email'];
    items.push(role == 'Manager' ? 'officeNumber' : role == 'Engineer' ? 'Github' : 'school');
    questions = [];
    items.forEach(item => {
        questions.push({type:'input',name:item,message:`What is your ${item}?`})
    });
   
;
    // now take the list we built, and prompt the user for each one.
    prompt(questions).then(answers => {

        if (role === 'Manager') {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamRoster.Manager.push(manager);            
        } 
        if (role === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamRoster.Engineer.push(engineer)
        }
        if (role === 'Intern') {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamRoster.Intern.push(intern)
        }

      // pass in the entire team roster
        var stringHtml = generatePage(teamRoster);
        // console.log(stringHtml);
        writeHtmlFile(stringHtml);               
        
    });

    // once the team roster is built, then send it to the file
    // generateTeamHtml(generatePage.generateManager(teamRoster.Manager[0])); 
    //generateTeamHtml(teamRosster)); 
   
    
});


// create function to write html file **const writeHtml = data =>

const writeHtmlFile = stringHtml => {

    fs.writeFile('./dist/index.html', stringHtml, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created!')
        }
    });

}