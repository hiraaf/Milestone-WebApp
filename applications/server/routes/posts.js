const express = require("express");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const providerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");



// This section will help you get a list of all the records.
//need to get inform search bar
providerRoutes.route("/post").get(function (req, res) {
    let db_connect = dbo.getDb("Milestones");
    db_connect
        .collection("Post")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

providerRoutes.route("/createPost").post(function(req,res){
    let db_connect = dbo.getDb("Milestones");
    let myObj = {
        rate: req.body.rate,
        service: req.body.service,
        name: req.body.name,
        expOne: req.body.expOne,
        expTwo: req.body.expTwo,
        tnp: req.body.tnp,
    };
    db_connect.collection("Post").insertOne(myObj, function(e,result){
        if(e) throw err;
        res.json(result);
    });
});

module.exports = providerRoutes;