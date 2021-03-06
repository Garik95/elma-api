require("./models/index.js");
const express = require("express");

const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");

http: app.use(cors());
app.use(fileUpload());
app.use(express.static("uploads"));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
	express.urlencoded({
		extended: true,
	})
);

// routesss!!!!
require("./routes/v1/FolderRoute")(app);
require("./routes/v1/FileRoute")(app);

// handle undefined routes
app.use("*", (req, res) => {
	res.status(404).json({
		success: "false",
		message: "Page not found",
		error: {
			statusCode: 404,
			message: "You reached a route that is not defined on this server",
		},
	});
});

// set port, listen for requests
const PORT = process.env.PORT || 6767;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
