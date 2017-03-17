  const Product = require('../../../models/Product')

module.exports = (req,res) => {

  const userId = req.params.id

  Product.find( {  "owner": userId } )
    .then( products => res.json(products) )
    .catch( err => { throw err } )
}