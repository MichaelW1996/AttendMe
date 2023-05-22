const router = require("express").Router();
const { Guest } = require("../../models"); //get the Guest model as this is needed for the below queires
const withAuth = require("../../utils/withAuth"); //require the authorisation check helper

//get all guests invited, only possible from a logged in user - withAuth checks for logged in status
router.get("/all", withAuth, async (req, res) => {
  try {
    const guestlist = await Guest.findAll();
    res.status(200).json(guestlist);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

//post a new guest name, only from a logged in user
router.post("/new", withAuth, async (req, res) => {
  const { firstname, lastname } = req.body;
  try {
    const newguest = await Guest.create({
      firstname,
      lastname,
      invitedbyID: req.session.user_id, //get the ID for the new guest from the session - this means the new guest will display as being invited by the user logged in at the time
    });
    res.status(200).json(newguest);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/rsvp", async (req, res) => {
  //route for guests to check they are invited - not this is not protected by withAuth, allowing for those without logins to check if they are invited
  console.log("got rsvp request");
  try {
    const dbGuestData = await Guest.findOne({
      where: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
    });
    if (dbGuestData) {
      res.status(200).json(dbGuestData);
    } else {
      res.status(404).json({ message: "No guests found with this name" });
    }
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
