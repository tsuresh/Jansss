const nodemailer = require('nodemailer');

exports.send_ticket = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'websofttech321@gmail.com',
            pass: 'mageupandine1999'
        }
    });

    const mailOptions = {
        from: req.email, // sender address
        to: 'jansss.live@gmail.com', // list of receivers
        subject: 'JANSSS Contact Ticket '+Math.floor(100000000 + Math.random() * 900000000), // Subject line
        html: '<p> Customer First Name : ' + req.body.firstName + '</p><p> Customer Surname : ' + req.body.surname + '</p><p> Customer Email : ' + req.body.email + '</p><p> Customer Phone Number : ' + req.body.phone + '</p><p> Customer Message : ' + req.body.message + '</p>'// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        else {
            res.status(201).json({
                message: "Ticket sent. "
            });
        }
    });
}