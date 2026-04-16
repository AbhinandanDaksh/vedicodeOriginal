const nodemailer = require("nodemailer");

const mailSender = async (email, title, body, attachments = []) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })

            const finalAttachments = Array.isArray(attachments) ? [...attachments] : []

            // Auto-embed logo when templates use cid and a URL is configured.
            if (
              typeof body === "string" &&
              body.includes("cid:vedicode-logo") &&
              process.env.MAIL_LOGO_URL &&
              !finalAttachments.some((a) => a && a.cid === "vedicode-logo")
            ) {
              finalAttachments.push({
                filename: "logo.png",
                path: process.env.MAIL_LOGO_URL,
                cid: "vedicode-logo",
              })
            }

            let info = await transporter.sendMail({
                from: 'Code #',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
                attachments: finalAttachments,
            })
            // console.log(info);
            return info;
    }
    catch(error) {
        // console.log(error.message);
    }
}


module.exports = mailSender;