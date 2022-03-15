const express = require('express');
const app = express();
//to support styling
app.use(express.static('assests'));
//to support ejs file
app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
//to open and connect in server
app.listen(port, () => { console.log("you are on the server^_^"); })
app.get("/", (req, res) => {
    res.render("index")
})