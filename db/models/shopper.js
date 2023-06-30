
const { DataTypes } = require("sequelize");
const db = require("../db");

const Shopper = db.define('Shopper', {
    fristName: {
        type: DataTypes.STRING,
        allownull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allownull: false,
    },
    size: {
        type: DataTypes.INTEGER,
        allownull: false,
    },

})

module.exports = Shopper;