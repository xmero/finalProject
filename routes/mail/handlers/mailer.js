const nodemailer = require('nodemailer');

const Product = require('../../../models/Product')
const mongoose = require('mongoose')

module.exports = (req,res) => {

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '+++++++++@gmail.com',
        pass: '+++++++++'
    }
});

const { name, product, location, email, message} = req.body

let mailOptions = {
    from: '+++++++++@gmail.com', 
    to: `${email}`,
    subject: `Product request from ${name}`, 
    text: `Item requested: ${product} From: ${location} Message: ${message}`,  
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

