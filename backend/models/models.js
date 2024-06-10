const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('post', {
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title:{type: DataTypes.STRING},
  body:{type: DataTypes.STRING},
  img: {type: DataTypes.STRING, allowNull: true},
  tag: {type: DataTypes.STRING, allowNull: true}
})

const User = sequelize.define('user',{
  id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
  name:{type: DataTypes.STRING},
  surname:{type:DataTypes.STRING},
  patronymic:{type:DataTypes.STRING, allowNull: true},
  birthday: {type:DataTypes.DATEONLY, allowNull: true},
  city:{type: DataTypes.STRING, allowNull: true},
})

const Subscrybers = sequelize.define('subscrybers', {
  email: {type: DataTypes.STRING, primaryKey:true},
  id: {type:DataTypes.STRING, allowNull: true},
  mail: {type: DataTypes.BOOLEAN, allowNull: true},
  phone_sms: {type: DataTypes.BOOLEAN, allowNull: true}
})

module.exports = {Post, User, Subscrybers}