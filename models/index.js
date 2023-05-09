const User = require("./User");
const Guest = require("./Guest");

User.hasMany(Guest, {
  foreignKey: "invitedbyID",
}); //shows who was invited by whom

Guest.belongsTo(User, {
  foreignKey: "invitedbyID",
  onDelete: "CASCADE",
}); //If a user is removed, all guests invited by them are uninvited

module.exports = { User, Guest };
