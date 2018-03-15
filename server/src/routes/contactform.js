import { Router } from "express";
import { sendEmail } from "../utils/mail";

let router = Router();

router.post("/", (req, res, next) => {
    let messageBody = `name: ${req.body.name}
                        Email: ${req.body.email}
                        Message: ${req.body.message}`
    sendEmail('gr1mm4c33@gmail.com', "no-reply-mg@covalence.io", "New Contact Form Submission", messageBody)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        next(err);
    });
})
export default router;