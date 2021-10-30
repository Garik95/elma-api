const db = require('../models/index');
const mongoose = require('mongoose');
const Model = db.Folder;

exports.findAll = (req,res) => {
    Model.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}

exports.create = (req,res) => {
    Model.create(req.body, (err,result) => {
        if(err) res.send(err);
        else {
            res.send(result)
        }
    })
}