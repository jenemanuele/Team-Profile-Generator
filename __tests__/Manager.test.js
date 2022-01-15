// use manager constructor
const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

//Manager obj creation
test('creates a Manager obj', () => {
    const manager = new Manager('Jen', 23, 'jemanuele@gmail.com', 22);

    expect(manager.officeNumber).objectContaining(expect.any(Number));
    
});

//get role form getRole()
test('gets role employee', () => {
    const manager = new Manager('Jen', 23, 'jemanuele@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});
