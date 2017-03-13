const Product = require('../../../models/Product')

module.exports = (req,res) => {

  Product.find()
    .then( products => res.json(products) )
    .catch( err => { throw err } )

}