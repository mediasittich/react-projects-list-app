const db = require('../models');

exports.getProjects = (req, res) => {
    db.Project.find()
        .sort({created_date: -1})
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
    // console.log(req.body.newProject)
    db.Project.create(req.body.newProject)
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
exports.updateKeysInProject =(req, res) => {
    console.log(req.body)
    const updatedProject = req.body;
    const id = req.params.projectId;
    db.Project.findByIdAndUpdate(
        {_id: req.params.projectId},
        {$set: updatedProject})
        .then((updatedProject) => {
            res.json(updatedProject)
        })
        .catch((err) => {
            res.send(err);
        })
}

exports.updateProject = (req, res) => {
    // console.log(req.params.projectId)
    console.log(req.body)
    const updatedProject = req.body;
    db.Project.findByIdAndUpdate(
        {_id: req.params.projectId},
        req.body,
        // {$push: {url: req.body.url}},
        {new: true})
        .then((updatedProject) => {
            // console.log(updatedProject)
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