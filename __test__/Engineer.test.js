const Engineer= require('../lib/Engineer')
test ('Engineer Test Sheet',()=>{
    const engineer= new Engineer('Robina','123','rgonsahn@yahoo.com','rgonsahn')
    expect(engineer.name).toBe('Robina');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('rgonsahn@yahoo.com');
    expect(engineer.getName()).toBe('Robina');
    expect(engineer.getId()).toBe('123');
    expect(engineer.getEmail()).toBe('rgonsahn@yahoo.com');
    expect(engineer.getGithub()).toBe('rgonsahn')
    expect(engineer.getRole()).toBe('Engineer');
    
})