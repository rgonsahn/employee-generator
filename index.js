const inquirer= require('inquirer');
const fs = require('fs'); 

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager'); 
const { ADDRGETNETWORKPARAMS } = require('dns');

const team= [];

const newManager=[
    {
        name:'role', 
        type:'confirm',
        message:'Welcome to the Team Profile Generator! Are you ready to begin?',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Please enter the name of the manager'
    },
    {
        name: "id",
        type: "input",
        message:"What is your employee ID?",
    }, 
    {
        name:'email',
        type:'input',
        message:'Please enter your email address.',
    },
    {
        name:'Office Phone Number',
        type:'input',
        message:'Please provide your office phone number.',
    }, 
    {
        name:'next option',
        type:'list',
        choices: ['Add Employee', 'Add Engineer', 'Add Intern', 'My team is complete!'],
        message:'Please select from these options',
    },
]
const newEmployee=[
    {
        name:'name',
        type:'input',
        message:'Please enter the name of the employee',
    },


    {
        name:'id',
        type:'input',
        message:'Please enter the employee ID',
    },
    {
        name:'email',
        type:'input',
        message:"Please enter your employee's email",
    },
    {
        name:'next option',
        type:'list',
        choices: ['Add Intern', 'Add Engineer', 'Add Manager', 'My team is complete!'],
        message:'Please select from these options',
    },
   
] 
const newEngineer= [
    {
        name:'name',
        type:'input',
        message:'Please enter the name of the engineer',
    },
     {
        name:'id',
        type:'input',
        message:'Please enter the id of the engineer',
    },
    {
        name:'email',
        type:'input',
        message:'Please enter the email address of the engineer',
    }, 
    {
        name:'Github',
        type:'input',
        message:"Please enter the engineer's Github username",
    },
    {
        name:'next option',
        type:'list',
        choices: ['Add Employee', 'Add Intern', 'Add Manager', 'My team is complete!'],
        message:'Please select from these options',
    },
]


    const newIntern=[
        {
            name:'name',
            type:'input',
            message:"What is the Intern's name",
        },
        {
            name:'id',
            type:'input',
            message:"Please enter the Intern's employee ID",
        },
        {
            name:'email',
            type:'input',
            message:'Please enter the email of the Intern',
        },
        {
            name:'school',
            type:'input',
            message:'What university or college does the intern attend',
        },
        {
        name:'next option',
        type:'list',
        choices: ['Add Employee', 'Add Engineer', 'Add Manager', 'My team is complete!'],
        message:'Please select from these options',
        },


    ]


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
           
        })
}
init();