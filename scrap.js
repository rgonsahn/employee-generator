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
        name:'OfficePhoneNumber',
        type:'input',
        message:'Please provide your office phone number.',
    }, 
    {
        name:'nextOption',
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
        name:'nextOption',
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
        name:'nextOption',
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
        name:'nextOption',
        type:'list',
        choices: ['Add Employee', 'Add Engineer', 'Add Manager', 'My team is complete!'],
        message:'Please select from these options',
        },


    ]


function init() {
    inquirer
        .prompt(newManager)
        .then((member) => {
            // new object, new Employee, new Manager, new intern
            team.push(newManager);
           if (member.nextOption === 'Add Employee'){
            init(newEmployee);
           }
           else if(member.nextOption === 'Add Engineer'){
            init(newEngineer);
           }
           else if (member.nextOption === 'Add Intern'){
            init(newIntern);
           }
           
        })
}
init();

function managerHtml(manager) {
    return `
    <div>${manager.getName()}</div>
    `
}

function generateProfiles(team){
const teamProfile= team.map((member) => {
    const role = member.getRole()
    if (role === 'Manager') {
        // generate HTML card for manager
        return managerHtml(member)
        
    }

    if (role === 'Intern') {
        // generate HTML card for manager
        return managerHtml(member)
        
    }

    if (role === 'Engineer') {
        // generate HTML card for manager
        return managerHtml(member)
        
    }
    // const {name, id, email}= member;
    // if (member.hasUniqueInfo('OfficePhoneNumber')){
    //     const {OfficePhoneNumber}= member;
    //     // new what? new Emloyee(), new Manager(), new Intern()
    //     return new (name,email,id,OfficePhoneNumber);
    // // }
})

const mainHtml = `
<html>
    <head>
    
    </head>
    <body>
    
    ${teamProfile.join('')}
    </body>
</html>
`

// write main html to html file
}

