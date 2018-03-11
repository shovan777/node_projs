const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// server
describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        // .expect('Hello World')
        // .expect({
        //   error: 'Page not found.'
        // })
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return users array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        // .expect('Hello World')
        // .expect({
        //   error: 'Page not found.'
        // })
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Shovan',
            age: 23
          });
        })
        .end(done);
    });
  })
});
