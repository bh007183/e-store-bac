
const router = require("express").Router();
const db = require("../models");

router.post("/api/addtocart", async (req, res) =>{
    await db.Cart.create(req.body).catch(err => res.status(500))
    res.json("Item added to cart")
    
    
})


module.exports = router