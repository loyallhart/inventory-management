const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth:{
        user:"invmanagement@outlook.com",
        pass:"1qaz-pl,"
    }
})

const options ={
    from:"invmanagement@outlook.com",
    to:"matt.watkins@police.gatech.edu",
    subject: "test notification",
    text:"test text message"
}

module.exports = {transporter, options}