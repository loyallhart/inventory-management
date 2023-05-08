const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth:{
        user:"invmanagement@outlook.com",
        pass:"1qaz-pl,"
    }
})

let options ={
    from:"invmanagement@outlook.com",
    to:"matt.watkins@police.gatech.edu",
    subject:"Item out of stock"
}

module.exports = {transporter, options}