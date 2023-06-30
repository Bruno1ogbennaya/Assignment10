const express = require('express');
const router = express.Router();
const { Shopper } = require("../db/models");


router.get('./', async (req, res, next) => {
    try{
        //shoes.findall == select * from shopper
        const allShoppers = await Shopper.findAll();

   allShoppers ? res.status(200).json(allShoppers) 
   : res.status(404).send("Shopper List Not Found");

    } catch(error) {

        next(error);
    }

});

module.exports = router;