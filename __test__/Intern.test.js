const Intern= require('../lib/Intern')
test ('Intern Test Sheet',()=>{
    const intern= new Intern('Robina','123','rgonsahn@yahoo.com','Georgia Institute of Technology')
    expect(intern.name).toBe('Robina');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('rgonsahn@yahoo.com');
    expect(intern.getName()).toBe('Robina');
    expect(intern.getId()).toBe('123');
    expect(intern.getEmail()).toBe('rgonsahn@yahoo.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('Georgia Institute of Technology')
})