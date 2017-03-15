const User = require('../../../models/User')

module.exports = (req,res) => {


  const {  id, reviewer, reviewed, rating, message } = req.body
  
  User.findByIdAndUpdate(
    id,
    {
      $push: {
        reviews: {
           $each: [ { reviewer, reviewed: id, rating, message } ]
        }
      } 
    },
    {safe: true, upsert: true, new : true}
  )
    .then( user => res.redirect("/") )
    .catch( err => { throw err })
}