
const Engineer = require('../Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Ravi', 54, 'ravikvelaga@gmail.com', 'RavikVelaga');

    expect(engineer.github).toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Ravi', 54, 'ravikvelaga@gmail.com', 'RaviKVelaga');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});



test('gets role of employee', () => {
    const engineer = new Engineer('Ravi', 54, 'ravikvelaga@gmail.com', 'RaviKVelaga');
    expect(engineer.getRole()).toEqual('Engineer');
});

