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
    router.get("/all", async (req, res) => {
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
