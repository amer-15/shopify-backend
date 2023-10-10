"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.orders, {
        foreignKey: "user_id",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  users.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
    }
  );
  return users;
};
