const loginmarker = (req) => {
  if (!req.session.logged_in) {
    //if not logged in
    return false;
  } else {
    return true;
  }
};
module.exports = loginmarker;
