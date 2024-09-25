"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAdapter = void 0;
const EmailServices_1 = require("../services/EmailServices");
class EmailAdapter {
    constructor() {
        this.emailService = new EmailServices_1.EmailService();
    }
    sendMessage(content, recipient) {
        const subject = "Notification";
        this.emailService.sendEmail(subject, content, recipient);
    }
}
exports.EmailAdapter = EmailAdapter;
