
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
require("dotenv").config();
require("../src/db/conn");
const views_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../static");
const app = express();
const port = process.env.PORT || 80;


app.use("/static", express.static(static_path));
app.use(express.json());
app.use(urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", views_path);

app.get("/", (req, res) => {
    res.status(200).render("index.ejs");
});

app.get("/login", (req, res) => {
    res.status(200).render("login.ejs");
});

app.get("/signup", (req, res) => {
    res.status(200).render("signup.ejs");
});

app.get("/contactUs", (req, res) => {
    res.status(200).render("contact-us.ejs");
});

app.get("/blogs", (req, res) => {
    res.status(200).render("blog.ejs");
});




//* listen
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});