"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    sendEmail(subject, body, to) {
        console.log(`Sending Email to ${to} with subject: ${subject}\nBody: ${body}`);
    }
}
exports.EmailService = EmailService;
