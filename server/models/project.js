const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: 'Title cannot be blank!'},
    content: { type: String, required: false },
    completed: { type: Boolean, default: false},
    created_date: { type: Date, default: Date.now}
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;