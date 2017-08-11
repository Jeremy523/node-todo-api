var mongoose = require('mongoose');

// mongoose uses callbacks by default
mongoose.Promise = global.Promise;
// no need to micromanage order of things, mongoose manages this
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};
