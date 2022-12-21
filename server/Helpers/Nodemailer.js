const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'feh-ACL-fel-beet@outlook.com',
        pass: 'OmarlikesHomer'
    }
});

const sendMail = async (emailAddress, subject, message) => {
    
    try {
        let info = await transporter.sendMail({
            from: 'feh-ACL-fel-beet@outlook.com', // sender address
            to: emailAddress, // list of receivers
            subject: subject, // Subject line
            text: message, // plain text body
        });

        console.log(info)
        return true;
        
    } catch (e) {
       console.log(e);
        return e.message;
        
    }
}

module.exports = sendMail;