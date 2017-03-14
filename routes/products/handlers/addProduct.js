const Product = require('../../../models/Product')

module.exports = (req,res) => {

  //const { user } = req
  const { name, description, location, user, category } = req.body
  const product = new Product({ name, description, location, user, category })

  product.save()
    .then( products => res.redirect("/") )
    .catch( err => { throw err })

}