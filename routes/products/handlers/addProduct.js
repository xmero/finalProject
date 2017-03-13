const Product = require('../../../models/Product')

module.exports = (req,res) => {

  //const { user } = req
  const { name, description } = req.body
  const product = new Product({ name, description })

  product.save()
    .then( products => res.redirect("/") )
    .catch( err => { throw err })

}