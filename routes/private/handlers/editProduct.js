const Product = require('../../../models/Product')

module.exports = (req,res) => {

  const id = req.params.id
  let { name, location, description, image } = req.body
  const updatedAt = Date.now()

  Product.findByIdAndUpdate  ( id,  {name, location, description, image, updatedAt } )
    .then( product => {
      console.log('Product has been updated succesfully')
      res.json(product) 
    })
    .catch( err => res.status(500).json(err) )

}

