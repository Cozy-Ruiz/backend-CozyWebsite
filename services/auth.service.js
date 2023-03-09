const nodemailer = require('nodemailer');

const { config } = require('./../config/config');

class AuthService {

    async sendMailContact(name, email, message) {
        
        const transporter = nodemailer.createTransport({
            host: "mail.greenribbonccms.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: config.smtpEmail,
                pass: config.smtpPassword
            },
        });

        var mail = {
            from: config.smtpEmail, // sender address
            to: email, // list of receivers
            subject: "Contacto Cozy Website.", // Subject line
            text: `Saludos ${name} .`, // plain text body
            html: `<b>Hi ${name}!!<br><br>Eh recibido tu mensaje, me pondré en contacto lo mas pronto que pueda a esta direccion de email: ${email}.<br><br>Te envio un cordial saludo.</b>`, // html body
        }

        await transporter.sendMail(mail);

        mail = {
            from: config.smtpEmail, // sender address
            to: 'cozy.ruiz@gmail.com', // list of receivers
            subject: "Contacto Cozy Website.", // Subject line
            text: `Saludos Cozy .`, // plain text body
            html: `<b>${name} se quiere poner en contacto contigo.<br><br>Dejó los siguientes datos:<br><br>Direccion de email: ${email}<br><br>Mensaje: ${message}.<br><br>Ponte en contacto lo mas pronto posible.</b>`, // html body
        }

        await transporter.sendMail(mail);
        
        return { message: 'mail sent' };
        
    }

}

module.exports = AuthService;
