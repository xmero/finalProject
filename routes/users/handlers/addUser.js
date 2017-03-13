const User = require('../../../models/User')

module.exports = (req,res) => {

  const { name, description, location } = req.body
  const user = new User({ name, description, location })

  user.save()
    .then( user => res.redirect("/") )
    .catch( err => { throw err })

}