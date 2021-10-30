module.exports = (app) => {
    const Model = require('../../controllers/FolderController')

    var router = require("express").Router();
    // return all documents
    router.get('/', Model.findAll);
    router.post('/', Model.create);
    // router.get('/all', Model.findAllNodes);
    // return specific document by ID
    // router.get('/:id', Model.findById);

    app.use('/api/v1/Folder',router);
}