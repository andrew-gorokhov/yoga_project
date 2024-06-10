const {User} = require('../models/models');

class UserController{
  async newUser(req, res) {
    const {name, surname, patronymic, birthday, city} = req.body;
    const user = await User.create({name, surname, patronymic, birthday, city})
    return res.json({message: 'Пользователь создан'})
  }

  async getUserData(req, res){
    const id = req.params.id
    const user=await User.findOne({where: {id}})
    return res.json(user)
  }

  async updateUserData(req, res){
    const {id, name, surname, patronymic, birthday, city} = req.body
    const user = await User.update({name, surname, patronymic, birthday, city}, {where: {id}})
    return res.json({message: 'Данные обновлены'})
  }
  async removeUser(req,res){
    const id = req.params.id
    const user = await User.destroy({where: {id}});
    return res.json({message: 'Аккаунт пользователя' +{id}+'был удален'})
  }
}

module.exports = new UserController;