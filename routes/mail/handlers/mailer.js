const nodemailer = require('nodemailer');

const Product = require('../../../models/Product')
const mongoose = require('mongoose')

module.exports = (req,res) => {

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '+++++++@gmail.com',
        pass: '++++++++++'
    }
});

const { name, product, location, email} = req.body
// setup email data with unicode symbols
// let mailOptions = {
//     from: 'komorebiapp@gmail.com', // sender address
//     to: email , // list of receivers
//     subject: `Product request from ${name}`, // Subject line
//     text: 'Item requested: ${product} From: ${location}', // plain text body
//     html: '<p>Email test one</p><ul><li>1</li><li>2</li><li>3</li><li>5</li><li>1</li></ul>'
// };

let mailOptions = {
    from: '++++++++@gmail.com', 
    to: `${email}`,
    subject: `Product request for ${name}`, 
    text: `Item requested: ${product} From: ${location} `,  
    }

console.log("Sending email")
console.log(req.body)
// send mail with defined transport object
transporter.sendMail( mailOptions,
    (err, response) => { 
    if (err) {
        res.send("We had problems sending the email")
    }
    res.redirect("/")
})


}

