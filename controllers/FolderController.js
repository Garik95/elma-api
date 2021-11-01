const db = require('../models/index');
const Model = db.Folder;

exports.findAll = (req, res) => {
    Model.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}

exports.findChild = (req, res) => {
    Model.find({parent:req.params.id}).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}

exports.findById = (req, res) => {
    Model.findById(req.params.id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}

exports.updateById = (req, res) => {
    Model.updateOne({_id:req.params.id},req.body).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}

exports.create = (req, res) => {
    Model.create(req.body, (err, result) => {
        if (err) res.send(err);
        else {
            res.send(result)
        }
    })
}

exports.removeById = (req, res) => {
    Model.deleteOne({
        _id: req.params.id,
        parent: {
            $ne: null
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}