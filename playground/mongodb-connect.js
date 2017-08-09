// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// manually create mongo id
// var obj = new ObjectID();
// console.log(obj);

// object destructuring
// pulling out a property of an object into a variable
// var user = {name: 'Jeremy', age: 19};
// var {name} = user;
// console.log(name);

// mongo _id's store timestamp, machine_id, process_id

// url to mongodb server
// this one is the local running mongodb server and we create a new db
// called TodoApp (not actually created until we add data)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
		return;
	}

	console.log('Connected to MongoDB server');

	// object, callback
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, res) => {
	// 	if (err) {
	// 		console.log('Unable to insert todo', err);
	// 		return;
	// 	}
	//
	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// Insert new doc into Users
	// db.collection('Users').insertOne({
	// 	name: 'Jeremy De La Cruz',
	// 	age: 19,
	// 	location: 'Brooklyn'
	// }, (err, res) => {
	// 	if (err) {
	// 		console.log('Unable to insert user', err);
	// 	}
	//
	// 	console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});
