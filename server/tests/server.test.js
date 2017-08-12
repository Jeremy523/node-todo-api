const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

// set up db to be empty for each test case (since I check that length is 1)
beforeEach((done) => {
	Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
	// test 1
	it('should create a new todo', (done) => {
		var text = 'test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200) // OK
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			});
	});

	// test 2
	it('should not create todo with invalid data', () => {

		request(app)
			.post('/todos')
			.send({})
			.expect(400) // BAD REQUEST
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(0);
					done();
				}).catch((e) => done(e));
			});
	});
});
