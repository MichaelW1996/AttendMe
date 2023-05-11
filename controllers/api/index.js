const router = require("express").Router();
const userRoutes = require("./userRoutes");
const guestRoutes = require("./guestRoutes");

router.use("/user", userRoutes); //if has/user in route, send to userRoutes
router.use("/guest", guestRoutes); //if has /guest, send to guestRoutes

module.exports = router;
