const db = require('../models/index');
const Model = db.Folder;

exports.findAll = (req, res) => {
    Model.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}

exports.findParent = async (req, res) => {
    var doc = await findById(req.params.id)
    var result = []
    result.push({
        text: doc.name,
        href: String(doc._id)
    })
    while (doc.parent != null) {
        doc = await findById(doc.parent)
        result.unshift({
            text: doc.name,
            href: String(doc._id)
        })
    }
    res.send(result);
}

exports.findChild = (req, res) => {
    Model.find({
        parent: req.params.id
    }).then(data => {
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
    Model.updateOne({
        _id: req.params.id
    }, req.body).then(data => {
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
    Model.find({
        parent: req.params.id
    }).then(result => {
        if (result.length == 0) {
            Model.deleteOne({
                _id: req.params.id
            }).then(data => {
                res.send(data)
            }).catch(err => {
                res.send(err);
            })
        } else {
            res.send({
                deletedCount: 0
            })
        }
    })
}

function findById(id) {
    return new Promise(resolve => {
        Model.findById(id)
            .then(data => {
                resolve(data);
            }).catch(err => {
                resolve(err);
            })
    })
}