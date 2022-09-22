const Employee= require('../lib/Employee')
test ('Employee Test Sheet',()=>{
    const employee= new Employee('Robina','123','rgonsahn@yahoo.com')
    expect(employee.name).toBe('Robina');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('rgonsahn@yahoo.com');
    expect(employee.getName()).toBe('Robina');
    expect(employee.getId()).toBe('123');
    expect(employee.getEmail()).toBe('rgonsahn@yahoo.com');
    expect(employee.getRole()).toBe('Employee');
})