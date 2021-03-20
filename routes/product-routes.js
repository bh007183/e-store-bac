const products = require("../seed")
const router = require("express").Router();
const db = require("../models");

router.get("/api/products/:category", async (req, res) =>{
    let data = await db.Products.findAll({
        where: {
            category: req.params.category
        }
    }).catch(err => res.status(500))
    res.json(data)
    
})

router.get("/api/products/subCat/:category", async (req, res) =>{
    let data = await db.Products.findAll({
        where: {
            subCategory: req.params.category
        }
    }).catch(err => res.status(500))
    res.json(data)
    
})
router.get("/api/featured", async (req, res) =>{
    let data = await db.Products.findAll({
        where: {
            featured: true
        }
    }).catch(err => res.status(500))
    res.json(data)
    
})

router.get("/api/products/item/:id", async (req, res) =>{
    let data = await db.Products.findOne({
        where: {
            id: req.params.id
        }
    }).catch(err => res.status(500))
    res.json(data)
    
})
router.post("/", async (req, res) =>{
    db.Products.bulkCreate(products)
    res.status(200)
    
})



module.exports = router