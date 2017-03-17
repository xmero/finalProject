const User = require('../../../models/User')

module.exports = (req,res) => {

  const id = req.params.id

  User.findByIdAndRemove  ( id )
    .then( user => {
      console.log('User has been removed succesfully')
      res.redirect("/") 
    })
    .catch( err => res.status(500).json(err) )

}

