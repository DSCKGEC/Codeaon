const express = require("express");
const Router = express.Router();
const User = require("../models/user.model");

Router.route("/login")
    .get(async (req, res) => {
        res.status(200).render("login.ejs");
    })

module.exports = Router;
