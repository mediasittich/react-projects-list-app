const db = require('../models');

exports.getProjects = (req, res) => {
    db.Project.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.send(err);
        })
}
exports.createProject = (req, res) => {
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
    db.Project.findByIdAndUpdate({_id: req.params.projectId}, req.body, {new: true})
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