const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  // nesting describe
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(2, 5);
      expect(res).toBe(7).toBeA('number');
      // throw new Error('value not correcr');
      // if (res !== 7) {
      //   throw new Error(`Expected 7, but got ${res}`);
      // }
    });
  });



  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toEqual(7).toBeA('number');
      done();
    });
  });

  it('should square two numbers', () => {
    var res = utils.square(5);
    expect(res).toBeA('number').toBe(25);
    // if (res !== 25) {
    //   throw new Error(`Expected 25, but got ${res}`);
    // };
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toEqual(16).toBeA('number');
      done();
    });
  });

});


// it('should expect some values', () => {
//   // expect(13).toNotBe(12);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2, 3, 4]).toInclude(2);
//   // expect([2, 3, 4]).toExclude(5);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'philadelphia'
//   }).toInclude({
//     age: 25
//   });
// });

// slhould verify first and last names are set
it('should verify first and last names are set', () => {
  // user = {};
  // var res = utils.setName({
  //   firstName: '',
  //   lastName: ''
  // }, 'Shovan Shrestha');
  var res = utils.setName({}, 'Shovan Shrestha');

  expect(res).toInclude({
    firstName: 'Shovan',
    lastName: 'Shrestha'
  }).toBeA('object');
});
