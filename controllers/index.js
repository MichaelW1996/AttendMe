const router = require("express").Router();
// const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/api", homeRoutes); //cahnge back to /api routes once complete
//sends all routes starting with /api to the api router index
router.use("/", homeRoutes); //sends other routes to homeroutes

module.exports = router;
