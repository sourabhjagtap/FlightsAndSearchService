'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey : 'cityId',
        onDelete: 'CASCADE'//It help to automatically delete all the airports belong to the city which we delete from the city table 
      });
    }
  }
  Airport.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    address: DataTypes.STRING,
    cityId: {
      type :DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};