const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
		return;
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos')
	// .findOneAndUpdate({
	// 	_id: new ObjectID('598b9f3889ce4bf52b4bff3b')
	// }, /* mongo operators */ {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, /* options */ {
	// 	returnOriginal: false // return updated one instead of original
	// })
	// .then((res) => {
	// 	console.log(res);
	// });

	db.collection('Users')
	.findOneAndUpdate({
		name: 'Johnny De La Cruz'
	}, {
		
		$set: {
			name: 'Jeremy'
		},

		$inc: {
			age: 1
		}

	}, {
		returnOriginal: false
	})
	.then((res) => {
		console.log(res);
	});

	//db.close();
});
