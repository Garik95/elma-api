const db = require('../models/index');
const Model = db.File;
const path = require('path')


exports.findAll = (req, res) => {
    console.log(req.query);
    if (!req.query)
        Model.find().then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err);
        })
    else {
        var reg = `/.*${req.query.searchTerm}.*/`;
        Model.find({
            originalName: {
                $regex: '.*' + req.query.searchTerm + '*.',
                $options: 'i'
            }
        }).then(data => {
            res.send(data)
        }).catch(err => {
            console.log("err", err);
            res.send(err);
        })
    }
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
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let file = req.files.file;
    let filename = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.name)
    req.body.originalName = file.name;
    req.body.name = filename;
    Model.create(req.body, (err, result) => {
        if (err) res.send(err);
        else {
            const uploadPath = __dirname + '/../uploads/' + filename
            file.mv(uploadPath, function (err) {
                if (err)
                    return res.status(500).send(err);
                res.send(result);
            });
        }
    })
}

exports.findByFolderId = (req, res) => {
    Model.find({
        folder: req.params.id
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
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