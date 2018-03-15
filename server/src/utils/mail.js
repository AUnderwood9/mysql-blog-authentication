import mailgunLoader from "mailgun-js";

// Load mailgun
let mailgun = mailgunLoader({ apiKey: process.env.MAILGUN_API_KEY, domain: 'sandbox6eda1757532746b393173ad392ebc77b.mailgun.org'});

function sendEmail(to, from, subject, content){
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data);
}

export { sendEmail };