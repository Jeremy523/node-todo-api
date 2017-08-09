const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
		return;
	}

	console.log('Connected to MongoDB server');

	// find returns a cursor
	// toArray returns a promise
	// db.collection('Todos')
	// 	.find({
	// 		_id: new ObjectID('598a785e15e9c824ef58bce1'),
	// 		completed: false
	// 	})
	// 	.toArray()
	// 	.then((docs) => {
	// 		console.log('Todos');
	// 		console.log(JSON.stringify(docs, undefined, 2));
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos', err);
	// 	});

	// db.collection('Todos')
	// 	.find()
	// 	.count()
	// 	.then((count) => {
	// 		console.log(`Todos count: ${count}`);
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos', err);
	// 	});

	db.collection('Users')
		.find({
			name: 'Jeremy De La Cruz'
		})
		.toArray()
		.then((docs) => {
			console.log('Users');
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log('Unable to fetch todos', err);
		});

	//db.close();
});
