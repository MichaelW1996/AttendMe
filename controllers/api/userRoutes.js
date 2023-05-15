const router = require("express").Router();
// const { User } = require("../../models");
//currently only need guests for this, user routes may be usefull if required for organiser management- a user may want to remove another user?
const { Guest } = require("../../models");

//to get all guest details - this may belong in a guest route but im using this as more of a members area with only authenticated users being able to search a guestlist?
router.get("/", async (req, res) => {
  try {
    const guestlist = await Guest.findAll();
    console.log(guestlist);
    res.json(guestlist);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

//post a new guest name
router.post("/new", async (req, res) => {
  const { firstname, lastname, invitedbyID } = req.body;
  try {
    const newguest = await Guest.create({
      firstname,
      lastname,
      invitedbyID, //might need to replace if not using session
    });
    console.log(newguest);
    res.status(200).json(newguest);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
