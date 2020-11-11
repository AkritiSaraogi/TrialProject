
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

const cors = require("cors");

app.use(cors());

const path = require("path");

app.get('/', (req, res) => res.send('Hello World with Express'));

const r = require("./routes/apiroutes");

app.use("/akriti", r)

const port = process.env.PORT || 3000
// app.get("*", (req, res, next) =>
// {
//     // console.log("Invalid Path access.")
//     res.statusCode = 501;
//     res.send();
//     next();
//     // res.sendFile(path.join(__dirname+"\\error.html"))
// })

app.listen(port, ()=>
{
    console.log("Server started at port " + port);
});

module.exports = app;