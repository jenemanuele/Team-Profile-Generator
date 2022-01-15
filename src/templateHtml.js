 // create Manager card
 const Manager = function (manager) {
    return `
    <div class="card">
        <div class="card-header">
            <h4>${manager.manangerName}<h4>
        </div>

        <div class="card-body">
            <p class="managerId"> ID: ${managerID.id}</p>
            <p class="managerEmail">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></p>
            <p class= "officeNumber">Office Number: ${officeNumber}</p>
        </div>
    </div>    
    `;
}

 // create Engineer card


 //creat Intern card


 // export function to generate entire page
 module.exports= templateData => {
    // destructure page data by section
    const { Manager, Engineer, Intern} = templateData;

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
              // ****w***data to be inserted
                </div>
            </div>
        </main>
    </body>
   
    </html>
    `
}
// need to link jquery, js after body??
