const {Subscrybers} = require('../models/models');

class SubscrybersController{
  async addSubscryber(req, res) {
    const {email} = req.body;
    const mail= 1
    const sub = await Post.create({email, mail})
    return res.json(sub)
  }

  async getSub(req, res){
    const id = req.params.id
    const sub=await Subscrybers.findOne({where: {id}})
    return res.json(sub)
  }

  async updateSub(req, res){
    const {email, id, mail, phone_sms} = req.body
    const sub = await Subscrybers.update({mail, phone_sms}, {where: {id, email}})
    return res.json({message: 'Данные обновлены'})
  }
  async removeSubEmail(req,res){
    const email = req.params.email
    const sub = await Subscrybers.destroy({where: {email}});
    return res.json({message: 'Запись' +{email}+'была удалена'})
  }
  async removeSubId(req,res){
    const id = req.params.id
    const sub = await Subscrybers.destroy({where: {id}});
    return res.json({message: 'Запись' +{id}+'была удалена'})
  }
}

module.exports = new SubscrybersController;