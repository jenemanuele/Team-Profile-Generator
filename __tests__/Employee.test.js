const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('makes employee obj', () => {
    const employee = new Employee('Jen', 23, 'jemanuele@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Jen', 23, 'jemanuele@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Jen', 23, 'jemanuele@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Jen', 23, 'jemanuele@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});