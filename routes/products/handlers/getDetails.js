  const Product = require('../../../models/Product')

module.exports = (req,res) => {

  const id = req.params.id

  Product.findById( id )
    .then( product => res.json(product) )
    .catch( err => { throw err } )

}
