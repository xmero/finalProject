const Product = require(__base+'models/Product')
const mongoose = require('mongoose')

module.exports = (req,res) => {

  const owner = mongoose.Types.ObjectId(req.body.owner);
  const { name, description, location, category, postalCode } = req.body
  const product = new Product({ name, description, location, category, owner, postalCode })

  product.save()
    .then( products => res.redirect("/") )
    .catch( err => { throw err })

}