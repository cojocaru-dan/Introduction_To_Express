const express = require("express");
const app = express();

const firstRouter = express.Router();

firstRouter.route("/").get((req, res) => {
    console.log("here");
    // res.send("First Content");
    res.render("index");
    // res.json({message: "Error"});
    // res.status(500).send("Salut");
    // res.sendStatus(500)
    // res.send("Salut");
});

app.set("view engine", "ejs");

const secondRouter = require("./routes/users");

app.use("/", firstRouter);
app.use("/", secondRouter);

app.listen(3000);