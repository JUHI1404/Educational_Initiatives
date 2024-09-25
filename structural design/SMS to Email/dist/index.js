"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SMSSender_1 = require("./services/SMSSender");
const EmailAdapter_1 = require("./adapters/EmailAdapter");
const smsSender = new SMSSender_1.SMSSender();
smsSender.sendMessage("Your OTP is 123456", "123-456-7890");
const emailSender = new EmailAdapter_1.EmailAdapter();
emailSender.sendMessage("Your OTP is 123456", "test@example.com");
