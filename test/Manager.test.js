
const Manager = require('../Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Ravi', 56, 'ravikvelaga@gmail.com', 55);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Ravi', 56, 'ravikvelaga@gmail.com', 55);
    expect(manager.getRole()).toEqual('Manager');
});