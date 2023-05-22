const router = require("express").Router();
const logincheck = require("../utils/loginmarker");

router.get("/", (req, res) => {
  //default route
  res.render("homepage", {
    //load the homepage
    logged_in: logincheck(req), //passes in the logged in status, this helps with displaying the login/logout button at top of page ( this is repeated in all partials)
  });
});

router.get("/login", (req, res) => {
  //if user tries to visit admin login page
  if (req.session.logged_in) {
    //check if they're logged in
    return res.redirect("/"); //if so, redirect them to homepage
  } else {
    res.render("login"); //if not render login page
  }
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    logged_in: logincheck(req),
  });
});

router.get("/faq", (req, res) => {
  res.render("faq", {
    logged_in: logincheck(req),
  });
});

router.get("/itinerary", (req, res) => {
  res.render("itinerary", {});
});

router.get("/rsvp", async (req, res) => {
  res.render("rsvp", {
    logged_in: logincheck(req), //passing in the logged in status here also changed the behaviour to show different functions for logged in users compared to non-logged in guests
  });
});
//future development - create route for a new page allowing authenicated users to create new authenicated users

module.exports = router;
