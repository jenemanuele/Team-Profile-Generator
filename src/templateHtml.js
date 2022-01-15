 // make Manager card
 const generateManager = function (manager) {
    return `
    <div class="card">
        <div class="card-header">
            <h3>${manager.name}: Manager</h3>
        </div>

        <div class="card-body">
            <p class="id"> ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class= "officeNumber">Office Number: ${officeNumber}</p>
        </div>
    </div>    
    `
}

 // make Engineer card
 const generateEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="card-header">
            <h3>${engineer.name}</h3>
        </div>

        <div class="card-body">
            <p class="id"> ID: ${engineer.id}: Engineer</p>
            <p class="email">Email: <a href="mailto:${engineer.emaill}">${engineer.email}</a></p>
            <p class= "github">Github: <a href="https://github.com/${engineer.github}"></a></p>
        </div>
    </div>    
`
 }

 // make  Intern card
 const generateIntern = function (intern) {
    return `
    <div class="card">
        <div class="card-header">
            <h3>${intern.name}: Intern</h3>
        </div>

        <div class="card-body">
            <p class="id"> ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.emaill}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>    
    `
 };

 generateTemplate = (teamRoster) => {

    teamRoster = [];

    for (let i =0; i < data.length; i++) {
        const employee =data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamRoster.push(managerCard)
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamRoster.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamRoster.push(internCard);
        }

        const teamCards = teamRoster.join('')

        const generateTeam = generateTeamTemplate(teamCards);
        return generateTeam;
    }


 }
// generateTeamTemplate using teamRoster array
const generateTeamTemplate = function (teamCards) {

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
                <h1 span class="navbar-brand text-center" id="navbar-text">Team Roster <h1>            
        </header> 
        <main>
            <div class="container">
                <div class= "row" id="team-cards">
                    ${teamCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`
}


// export to index
module.exports = generateTemplate;
