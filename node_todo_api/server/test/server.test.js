const expect = require('expect');
const request = require('supertest');

const {
  app
} = require('./../server');
const {
  Todo
} = require('./../models/todo');


const todos = [{
  text: 'first test todo'
}, {
  text: 'second test todo'
}];

// make some changes to test friendly environment
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done()); // empty the database after each test
});


describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'test to do text';

    request(app)
      .post('/todos')
      .send({
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({
          text
        }).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          // expect(todos[0].text).toBe(text + '1');
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      // .expect((res) => {
      //   expect(res.body.text).toBe({});
      // })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  })
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  })
})