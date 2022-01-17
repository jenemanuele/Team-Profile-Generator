const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


 // make Manager card
 const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>Manager: ${manager.name}</h3>
            </div>
            <div class="card-body">
                <p class="id"> ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class= "officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>    
    `
}

 // make Engineer card
 const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>Engineer: ${engineer.name}</h3>
            </div>
            <div class="card-body">
                <p class="id"> ID: ${engineer.id}: Engineer</p>
                <p class="email">Email: <a href="mailto:${engineer.emaill}">${engineer.email}</a></p>
                <p class= "github">Github: <a href="https://github.com/${engineer.github}"></a></p>
            </div>
        </div>
    </div>    
`
 }

 // make  Intern card
 const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>Intern: ${intern.name}</h3>
            </div>
            <div class="card-body">
                <p class="id"> ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.emaill}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>    
    `
 };

 // place array to page
 generatePage = (teamRoster) => {

    // console.log("********************************" +JSON.stringify(   teamRoster ));
    // console.log("********************************" +JSON.stringify(   teamRoster.Manager.length ));
    var teamRoster2 = [];
    for (let i =0; i < teamRoster.Manager.length; i++) {
        const employee = teamRoster.Manager[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamRoster2.push(managerCard)
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamRoster2.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamRoster2.push(internCard);
        }
        // joining
        const teamCards = teamRoster2.join('')

        // place on generated page
        const generateTeam = generateTeamHtml(teamCards);
        return generateTeam;
    }


 }
// generateTeamHtml using teamRoster array
const generateTeamHtml = function (teamCards) {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
        
    <body>
        <header>
            <nav class="navbar" id="navbar">
            <span class="mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>         
        </header> 
        <main>
        <div class="container">
            <div class="row" id="team-cards">
                <!--Team Cards-->
                ${teamCards}
            </div>
        </div>
    </main>
    
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}


// export to index page
module.exports = generatePage;