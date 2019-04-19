const Model = require('../../mocks/article/list')
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this
      await ctx.render('home/home.js')
    }
  }
}
