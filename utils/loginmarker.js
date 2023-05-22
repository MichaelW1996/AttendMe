const loginmarker = (req) => {
  //checks if the user is already logged in, differs from withAuth by not using a next as this is to give a boolean reply
  if (!req.session.logged_in) {
    //if not logged in
    return false;
  } else {
    return true;
  }
};
module.exports = loginmarker;
