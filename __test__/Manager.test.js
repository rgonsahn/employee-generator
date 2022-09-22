const Manager= require('../lib/Manager')
test ('Manager Test Sheet',()=>{
    const manager= new Manager('Robina','123','rgonsahn@yahoo.com','555-555-5555')
    expect(manager.name).toBe('Robina');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('rgonsahn@yahoo.com');
    expect(manager.getName()).toBe('Robina');
    expect(manager.getId()).toBe('123');
    expect(manager.getEmail()).toBe('rgonsahn@yahoo.com');
    expect(manager.getOfficeNumber()).toBe('555-555-5555')
    expect(manager.getRole()).toBe('Manager');
})