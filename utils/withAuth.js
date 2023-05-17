const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    //if not logged in
    return res.redirect("/login"); //redirect to login
  } else {
    next(); //if logged in, carry on with request
  }
};

module.exports = withAuth;

//to use for logged in requests, possibly for adding guests or FAQ  (perhaps some kind of dashboard?)
//dashboard features list of the users invited guests and their rsvp status
