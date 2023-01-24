const express = require("express");
const user = express();
const cors = require("cors");

user.use(cors());
user.use(express.json());
user.use(cors());

const dbo = require("../db/conn");
const bcrypt = require('bcrypt');
// This help convert the id from string to ObjectId for the _id.
const saltRounds = 10;
// get driver connection
// This section will help you create a new record.
user.route("/register").post(function (req, response) {
  if (err) throw err;
    let db_connect = dbo.getDb("Milestones");

    let myobj = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, saltRounds),
    };
    db_connect.collection("User").insertOne(myobj, function (err, res) {
      response.json(res);
    });
  });

//login
//http://localhost:3000/login?email=testingCrypt%40gmail.com&password=hello
user.route("/login").post(function (req,res){
  let db_connect = dbo.getDb("Milestones");
  let myobj =  {email: req.body.email,
                password: req.body.password};
                
db_connect
.collection("User").findOne({email:myobj.email}, async function(err,user){
  const result1 = await bcrypt.compare(myobj.password, user.password);
      if(!result1){
        console.log("Credentials wrong");
        res.status(500).send(err)
         
      }else{
         //console.log(user);
          //console.log(myobj.password)
          console.log("Success");
          res.cookie("name", user.name)
          res.status(200).send('cookie SET')
       
      }
              
  })
});

module.exports = user;