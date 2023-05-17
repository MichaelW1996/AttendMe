const router = require("express").Router();
const { Guest, User } = require("../models");
const withAuth = require('../utils/withAuth');

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  //if user tries to visit admin login page
  // if (!req.session.logged_in) {
  //   //check if they're logged in
  //   res.render("/login"); //if so, redirect them to homepage
  //   return;
  // }
   res.render("login"); //if not render login page
});

//router.get("/rsvp", (req, res) => {
 // res.render("rsvp");
//});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/faq", (req, res) => {
  res.render("faq");
});

router.get("/itinerary", (req, res) => {
  res.render("itinerary");
});

//router.get("/rsvp", (req, res) => {
  //res.render("rsvp");
//});
router.get('/rsvp', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    

    res.render('rsvp', {
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//may need a dashboard for authenicated users requiring an auth check (workshop timestamp ~2hrs:45)


module.exports = router;
