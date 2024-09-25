"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSSender = void 0;
class SMSSender {
    sendMessage(content, recipient) {
        console.log(`Sending SMS to ${recipient}: ${content}`);
    }
}
exports.SMSSender = SMSSender;
