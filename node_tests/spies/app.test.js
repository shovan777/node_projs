const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');



describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {

    var spy = expect.createSpy();
    // spy();
    spy('Shovan', 23);
    expect(spy).toHaveBeenCalledWith('Shovan', 23);
  });

it('should call saveUser with user object', () => {
  var email = 'raj.shrestha777@gmail.com';
  var password = '123456';

  app.handleSignup(email, password);

  expect(db.saveUser).toHaveBeenCalledWith({email, password});
});

});
