module.exports = (app) => {
    const Model = require('../../controllers/FolderController')

    var router = require("express").Router();
    // create a document
    router.post('/', Model.create);
    // return all documents
    router.get('/', Model.findAll);
    // return specific document by ID
    router.get('/:id', Model.findById);
    // return parent
    router.get('/:id/parent', Model.findParent);
    // return childs
    router.get('/:id/child', Model.findChild);
    // modify document by ID
    router.put('/:id', Model.updateById);

    router.delete('/:id', Model.removeById);

    app.use('/api/v1/Folder', router);
}