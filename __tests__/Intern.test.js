const Intern = require('..lib/Intern');
const { TestWatcher } = require('jest');

test('creates Intern ', () => {
    const intern = new Intern('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(intern.school .toEqual(expect.any(String)));
});

test("gets intern's school", ()=> {
    const intern = new Intern('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(intern.getSchool()).toEqual(expect.stringHaving(intern.school.toString()));

});

test('gets role of employee', () => {
    const intern = new Intern('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(intern.getRole()).toEqual('Intern');
});