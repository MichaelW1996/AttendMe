const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes); //sends all routes starting with /api to the api router index
router.use("/", homeRoutes); //sends other routes to homeroutes

module.exports = router;
