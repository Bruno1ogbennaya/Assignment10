const router = require('express').Router()

router.use("/shoppers", require("./shoppers"));
router.use("/shoes", require("./shoes"));

router.use((req, res, next) => {
    const error = new Error("404 Not found");
    error.status = 404;
    next(error);
})

module.exports = router;