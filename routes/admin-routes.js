  
const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config()



router.post("/api/Admin/Create", async (req,res) => {
    const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds)
    db.Admin.create({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
    }).then(res.json("Admin account created").end()).catch(err => res.json(err))

    
})



router.post("/api/AdminLogin", async (req, res) => {
    const data = await db.Admin.findOne({
        where:{
        username: req.body.username
        }
    }).catch( err => res.json("Error occured on login route"))

    if(data === null || !data){
        res.status(401).json("Username or password do not match")
    }

    const compair = await bcrypt
    .compare(req.body.password, data.password)
    .catch(err => res.status(403).json("Un-authorized user"))

    if(compair){
        jwt.sign({
            email: data.dataValues.email,
            id: data.dataValues.id,
        },
        process.env.JSON_MOSCOW,
         {expiresIn: "1hr"},
         (err, token) => {
             if(err) {
                 res.json("Error in Token: Possible ENV issue")
             }
             res.json({token, authorization: data.dataValues.id})
         })
    }else{
        res.json("Password or Username did not match")
    }
})

module.exports = router