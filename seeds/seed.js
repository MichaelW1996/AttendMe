const sequelize = require("../config/connection");
const { User, Guest } = require("../models");

const userData = require("./userData.json");
const guestData = require("./guestData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    //creat the user data from json of the user seed data
    individualHooks: true,
    returning: true,
  });

  for (const guest of guestData) {
    //create the guest data from the json of seed data
    await Guest.create({
      ...guest,
      invitedbyID: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
