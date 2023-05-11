const { Model, DataTypes } = require("sequelize"); // destructure to extend model and datatypes
const sequelize = require("../config/connection"); // so sequalise knows where to connect and send request to

//this will be used for guests RSVP'ing

class Guest extends Model {
  //table name
}

Guest.init(
  //initialise a table?
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      //validate to have no spaces or special characters?
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      //validate to have no spaces or special characters?
    },
    invitedbyID: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    attending: {
      type: DataTypes.BOOLEAN, //1 us attending, 0 is not
    },
  },
  {
    //hooks and stuff
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "guest",
  }
);

module.exports = Guest;
