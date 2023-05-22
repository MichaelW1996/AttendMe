const router = require("express").Router();
const { User } = require("../../models"); //requires user model for below

router.post("/", async (req, res) => {
  //route to create a new user - ideally to allow organisers to add more organisers to help invite guests and spread their workload - THIS HAS NOT BEEN IMPLEMENTED, this route is not called, only tested in insomnia
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  //route to login - used in the login page, or redirected if attempting to access content behind a withAuth check
  console.log(req.body);
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password); //uses checkpassword to check the hashed password in bCrypt

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;

      res.redirect("/");
      console.log("user logged in");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout route, called by log out button in main handlebars, which only appears if user is logged in
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
