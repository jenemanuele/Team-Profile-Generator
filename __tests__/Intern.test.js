// intern constructor
const Intern = require('../lib/Intern');

test('creates Intern ', () => {
    const intern = new Intern('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const intern = new Intern('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(intern.getRole()).toEqual('Intern');
});