const { Model, DataTypes } = require("sequelize"); // destructure to extend model and datatypes
const sequelize = require("../config/connection"); // so sequalise knows where to connect and send request to

//this will be used to store guest information

class Guest extends Model {
  //table name
}

Guest.init(
  //initialise the guest table
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
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invitedbyID: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    attending: {
      type: DataTypes.BOOLEAN, //1 us attending, 0 is not, this feild was intended to allow user to confirm attendance, however this was not implemented at time of writing
    },
  },
  {
    //hooks
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "guest",
  }
);

module.exports = Guest;
