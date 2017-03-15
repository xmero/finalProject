const User = require('../../../models/User')

module.exports = (req,res) => {

  const { username, description, location, email, password } = req.body
  const user = new User({ username, description, location, email, password })

  user.save()
    .then( user => res.redirect("/") )
    .catch( err => { throw err })

}