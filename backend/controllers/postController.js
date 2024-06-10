const {Post} = require('../models/models');

class PostController{
  async addPost(req, res) {
    const {title, body, img, tag} = req.body;
    const post = await Post.create({title, body, img, tag})
    return res.json(post)
  }

  async getPosts(req, res){
    const post=await Post.findAll();
    return res.json(post)
  }
  async getTagPosts(req,res){
    const tag = req.params.tag
    const post = await Post.findAll({where: {tag}})
    return res.json(post)
  }

  async updatePost(req, res){
    const {id, title, body} = req.body
    const post = await Post.update({title, body, img, tag}, {where: {id}})
    return res.json({message: 'Данные обновлены'})
  }
  async removePost(req,res){
    const id = req.params.id
    const post = await Post.destroy({where: {id}});
    return res.json({message: 'Запись' +{id}+'была удалена'})
  }
}

module.exports = new PostController;