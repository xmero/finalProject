const Product = require('../../../models/Product')

module.exports = (req,res) => {

  const id = req.params.id
  //let { username, email, location, description, image } = req.body
  const updatedAt = Date.now()

  Product.findByIdAndUpdate  ( id,  { updatedAt } )
    .then( user => {
      console.log('User has been updated succesfully')
      res.json(user) 
    })
    .catch( err => res.status(500).json(err) )

}

