const express = require("express");
const Router = express.Router();
const User = require("../models/user.model");

Router.route("/signup")
    .get(async (req, res) => {
        res.status(200).render("signup.ejs");
    })


module.exports = Router;
