const {User} = require('../models/models');
import argon2i from 'argon2'


class AuthService{
  async checkEmail(req, res) {
    const {email, password} = req.body;
    const userRecord = await User.findOne({email})
    if (!userRecord) {
      return res.json({Error: "Пользователь не найден"})
    } else {
      const correctPassword = await argon2i.verify(userRecord.password, password)
      if (!correctPassword){
        return res.json({Error: "Неправильный пароль"})
      }ю
      return {
        user: {
          email:userRecord.email,
          name: userRecord.name,
          surname: userRecord.surname,
          patronymic: userRecord.patronymic,
        },
        token: this.generateJWT(userRecord)
      }
    }
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