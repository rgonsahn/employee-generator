const inquirer = require('inquirer');
const fs = require('fs');
// const bootStrap= require('bootstrap')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const team = [];
const newHtml = [];


function askManager() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please enter the name of the manager',
            },
            {
                name: "id",
                type: "input",
                message: "What is your employee ID?",
            },
            {
                name: 'email',
                type: 'input',
                message: 'Please enter your email address.',
            },
            {
                name: 'OfficePhoneNumber',
                type: 'input',
                message: 'Please provide your office phone number.',
            },
        ])
        .then(function (response) {
            const manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.OfficePhoneNumber);

            team.push(manager);
            if (response.OfficePhoneNumber !== "") {
                getEmployee();
            }


        })
}
askManager();

function getEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'staff',
                choices: ["Engineer", "Intern", "I'm done building my team"],

            }
        ])
        .then(function (response) {
            if (response.staff === 'Engineer') {
                askEngineer();
            } else if (response.staff === 'Intern') {
                askIntern();
            } else {
                build();
            }

        })
}

function askEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the egineer'

            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee id",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address",
            },
            {
                type: 'input',
                name: 'GitHub',
                message: "What is the engineer's GitHub username?",
            },
        ])
        .then(function (response) {
            const engineer = new Engineer(
                response.engineerName,
                response.id,
                response.email,
                response.GitHub);
            team.push(engineer)
            if (response.GitHub !== "") {
                getEmployee();
            }

        })
}

function askIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern name?',
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's employee id?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address",
            },
            {
                type: 'name',
                name: 'internSchool',
                message: "What is the intern's university or college",
            },
        ])
        .then(function (response) {
            const intern = new Intern(
                response.internName,
                response.internID,
                response.internEmail,
                response.internSchool);
            team.push(intern);
            if (response.internSchool !== "") {
                getEmployee()
            }

        })

}

function build() {
    teamProfiles = [];
    let header = `
            <! DOCTYPE html>
            <html lang="en"
            <header>
            <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js">
    <title>Team Profiles</title>
    <header/>
    <body>
        <div class="jumbotron font-weight-bold text-center">
            <h1>TEAM PROFILES</h1>
        </div>
    
        <div class="container justify-content-center">
    
            <div class="d-flex flex-wrap justify-content-center"> `

    newCard.push(header);
    for (let i = 0; i < team.length; i++) {
        if (team[i].officeNumber) {
            teamProfiles.innerHtml =
                `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
                <div class="card-body bg-dark text-light">
                <h4 class="card-header">Role: ${team[i].name}</h4>
                <h4 class="card-title">${team[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email:<a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">Phone Number: ${team[i].officeNumber}</li>    
                </div>`
        } else if (team[i].gitHub) {
            teamProfiles.innerHtml +=
                `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
                <div class="card-body bg-dark text-light">
                <h4 class="card-header">Role: ${team[i].name}</h4>
                <h4 class="card-title">${team[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email:<a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">Phone Number: ${team[i].gitHub}</li>    
                </div>`

        } else if (team[i].school) {
            teamProfiles.innerHtml +=
                `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
                <div class="card-body bg-dark text-light">
                <h4 class="card-header">Role: ${team[i].name}</h4>
                <h4 class="card-title">${team[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email:<a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">Phone Number: ${team[i].school}</li>    
                </div>`
        }
    } newHtml.push(teamProfiles.innerHtml);
    let theEndHtml =
        ` </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
        </html>`
        newHtml.push(theEndHtml); 
        fs.writeFile

}