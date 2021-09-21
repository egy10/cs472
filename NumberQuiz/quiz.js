const express = require("express");
const path = require("path");

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        data: "Hello world"
    })
});

app.get("/question", (req, res) => {
    res.sendFile(path.join(__dirname + "/question1.html"));
});

app.get("/question2", (req, res) => {
    res.sendFile(path.join(__dirname + "/question2.html"));
});


app.listen(3000, () => {
    console.log('server listening on port 3000')
})