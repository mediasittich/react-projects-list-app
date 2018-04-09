var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/projects-list-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./project');