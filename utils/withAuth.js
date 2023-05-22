const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    //if not logged in
    return res.redirect("/login"); //redirect to login
  } else {
    next(); //if logged in, carry on with request
  }
};

module.exports = withAuth;
