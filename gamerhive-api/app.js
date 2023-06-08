require("dotenv").config();
const express = require('express')
const cors = require("cors");
const fileUpload = require('express-fileupload');
const connectToDb = require("./database/db");
const path = require('path');

const post = require("./routes/post");
const auth = require("./routes/auth");
const user = require("./routes/user");
const group = require("./routes/group");


const app = express()



connectToDb();
app.use(express.json());
app.use(fileUpload());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

var corsOptions = {
  origin: process.env.URI || "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1/posts", cors(corsOptions), post);
app.use("/api/v1/auth", cors(corsOptions), auth);
app.use("/api/v1/user", cors(corsOptions), user );
app.use("/api/v1/group", cors(corsOptions), group );




module.exports = { app };
