const router = require("express").Router();
const { Guest } = require("../../models");

//todo, write a get request to retreive user data based on search
router.get("/", async (req, res) => {
  const { firstname, lastname } = req.query;
  try {
    const guest = await Guest.findAll({ where: { firstname, lastname } });
    console.log(guest);
    res.json(guest);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/rsvp", async (req, res) => {
  console.log("got rsvp request");
  try {
    const dbGuestData = await Guest.findAll({
      where: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
    });
    if (dbGuestData) {
      console.log(dbGuestData);
    } else {
      //work in progress
    }
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
