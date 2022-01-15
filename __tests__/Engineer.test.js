const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates an Engineer obj', () => {
    const engineer = new Engineer('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(engineer.github).toEqual(expect.any(String));
});


test('gets engineer github', ()  => {
    const engineer = new Engineer('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Jen', 25, 'jemanuele@gmail.com', 'OSU');

    expect(engineer.getRole()).toEqual('Engineer');
});