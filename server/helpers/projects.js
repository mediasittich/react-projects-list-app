const db = require('../models');

exports.getProjects = (req, res) => {
    db.Project.find()
        .populate('urls')
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.send(err);
        })
}
exports.createProject = (req, res) => {
    console.log(req.body);
    db.Project.create(req.body)
        .then((newProject) => {
            res.status(201).json(newProject);
        })
        .catch((err) => {
            res.send(err);
        })
}

exports.getProject = (req, res) => {
    db.Project.findById(req.params.projectId)
        .then((foundProject) => {
            res.json(foundProject);
        })
        .catch((err) => {
            res.send(err);
        })
}
exports.updateProject = (req, res) => {
    console.log(req.body)
    db.Project.findByIdAndUpdate(
        {_id: req.params.projectId},
        {$push: {url: req.body.url}},
        {new: true})
        .then((updatedProject) => {
            res.json(updatedProject)
        })
        .catch((err) => {
            res.send(err);
        })
}
exports.deleteProject = (req, res) => {
    db.Project.findByIdAndRemove({_id: req.params.projectId})
        .then(() => {
            res.json({message: 'We deleted it!'});
        })
        .catch((err) => {
            res.send(err);
        })
}

module.exports = exports;