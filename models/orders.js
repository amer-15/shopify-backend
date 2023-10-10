"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: "user_id",
        allowNull: false,
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  orders.init(
    {
      price: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      sequelize,
      modelName: "orders",
      underscored: true,
    }
  );
  return orders;
};
