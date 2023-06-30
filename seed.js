const db = require("./db");
const{ Shoes, Shopper } = require("./db/models");

const seedShoes = [
    {company: "Nike", type: "jordans", laces: true, size: 19},
    {company: "Jordan", type: "yeezus", laces: true, size: 5},
    {company: "Crocs", type: "yeets", laces: false, size: 10},
    {company: "Nike", type: "jets", laces: true, size: 9},
    {company: "Supreme", type: "AirForce1", laces: false, size: 2},
];

const seedShoppers = [
    {fristName: "Bruno", lastName: "Mars", size: 12 },
    {firstName: "Bruno", lastName: "Venus", size: 8 },
    {firstName: "Star", lastName: "Wars", size: 11 },
    {firstName: "Bruno", lastName: "Chuks", size: 12 },
    {fristName: "Muna", lastName: "B", size: 14 },
    {firstName: "Alana", lastName: "Black", size: 12 },
    {firstName: "Martin", lastName: "lee", size: 12 },
    {fristName: "Bruno", lastName: "Stars", size: 16 },
    {fristName: "John", lastName: "Wick", size: 12 },
    {fristName: "Peter", lastName: "Parker", size: 9 },
    {fristName: "Miles", lastName: "Morales", size: 12 },
];

const seed = async () => {
    await Shoes.bulkCreate(seedShoes);
    await Shopper.bulkCreate(seedShoppers);
};

seed().then(() => process.exit());