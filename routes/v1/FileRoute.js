module.exports = (app) => {
	const Model = require("../../controllers/FileController");

	var router = require("express").Router();
	// create a document
	router.post("/", Model.create);
	// return all documents
	router.get("/", Model.findAll);
	// return specific document by ID
	router.get("/:id", Model.findById);
	// return files document by ID
	router.get("/folder/:id", Model.findByFolderId);
	// return childs
	// router.get('/:id/child', Model.findChild);
	// modify document by ID
	router.put("/:id", Model.updateById);

	router.delete("/:id", Model.removeById);

	app.use("/api/v1/File", router);
};
