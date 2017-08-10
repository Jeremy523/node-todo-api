const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
		return;
	}

	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos')
	// .deleteMany({
	// 	text: 'Eat lunch'
	// })
	// .then((res) => {
	// 	console.log(res);
	// });

	// deleteOne (same but only first one)
	// db.collection('Todos')
	// .deleteOne({
	// 	text: 'Eat lunch'
	// })
	// .then((res) => {
	// 	console.log(res);
	// });

	// findOneAndDelete
	// db.collection('Todos')
	// .findOneAndDelete({
	// 	completed: false
	// })
	// .then((res) => {
	// 	console.log(res);
	// });

	db.collection('Users')
	.deleteMany({
		name: 'Jeremy De La Cruz'
	})
	.then((res) => {
		console.log(res);
	});

	db.collection('Users')
	.findOneAndDelete({
		age: 26
	})
	.then((res) => {
		console.log(res);
	});

	//db.close();
});