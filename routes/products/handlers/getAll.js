const Product = require('../../../models/Product')
    const User = require('../../../models/User')

module.exports = (req,res) => {

    Product.find({} , function(err, product) {
        User.populate(product, {path: "owner"},function(err, product){
            res.send(product);
        })
        })
}