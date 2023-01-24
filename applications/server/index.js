const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(require("./routes/posts"));
app.use(require("./routes/user"));

const bcrypt = require('bcrypt');
// This help convert the id from string to ObjectId for the _id.
const saltRounds = 10;
// get driver connection
const dbo = require("./db/conn");

server.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});
