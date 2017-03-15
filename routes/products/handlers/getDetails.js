  const Product = require('../../../models/Product')
    const User = require('../../../models/User')

module.exports = (req,res) => {

  const id = req.params.id

  Product.findById(id, function(err, product) {
        User.populate(product, {path: "owner"},function(err, product){
            res.json(product);
        })
        })
}