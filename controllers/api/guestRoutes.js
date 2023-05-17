const router = require("express").Router();
const { Guest } = require("../../models");

//get all guests invited, ideally from a logged in user
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

//post a new guest name, ideally a logged in user
router.post("/new", async (req, res) => {
  const { firstname, lastname, invitedbyID } = req.body;
  try {
    const newguest = await Guest.create({
      firstname,
      lastname,
      invitedbyID: req.session.user_id, //might need to replace if not using session
    });
    console.log(newguest);
    res.status(200).json(newguest);
  } catch (err) {
    res.status(400).json(err);
  }
});

//any user (not logged in) can search for a name in the guest list
// router.post("/rsvp", async (req, res) => {
//   console.log("got rsvp request");
//   try {
//     const dbGuestData = await Guest.findAll({
//       where: {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//       },
//     });
//     if (dbGuestData) {
//       // console.log(dbGuestData);
//       console.log("guest data sent back to rsvp.js");
//       res.status(200).json(dbGuestData);
//     } else {
//       console.log("no guests of this name");
//       //work in progress - need to tell user that they're not invited
//     }
//   } catch (err) {
//     console.error("Error retrieving data:", err);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

router.post("/rsvp", async (req, res) => {
  console.log("got rsvp request");
  try {
    const dbGuestData = await Guest.findOne({
      where: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
    });
    if (dbGuestData) {
      console.log("guest data sent back to rsvp.js");
      res.status(200).json(dbGuestData);
    } else {
      console.log("no guests with this name");
      res.status(404).json({ message: "No guests found with this name" });
    }
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
