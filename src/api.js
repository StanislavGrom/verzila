const express = require('express');
const router = express.Router();
const Product = require("./model/Product");

// grub products from queue
router.get('/product/get/:limit', async (req, res) => {
    const products = await Product.findAll({where: {processed: false}, limit: +req.params.limit});
    products.forEach(async it => {
        await it.update({processed: true})
    });
    
    return res.json(products);
});

//add product to queue
router.post("/product/add", async (req, res) => {
    const reqBody = req.body;
    
    if (Array.isArray(reqBody)) {
        reqBody.forEach(async it => {
            await Product.create(it);
        });
        return res.sendStatus(200);
    }
    
    Product.create(reqBody);
    
    return res.sendStatus(200);
});

module.exports = router;

