const Shoes = require("./shoes")
const Shopper = require("./shopper")

//All associations and foreign keys go here

//One shopper has many shoes

//shoes can only have one shoe
/*
Shopper.hasMany(Shoes);
Shoes.belongsTo(Shopper); */

Shopper.belongsToMany(Shoes, {through: "ShopperShoes"});
Shoes.belongsToMany(Shopper, {through: "ShopperShoes"});

module.exports = {
    Shoes,
    Shopper,
};

