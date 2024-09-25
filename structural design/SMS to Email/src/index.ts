import { SMSSender } from "./services/SMSSender";
import { EmailAdapter } from "./adapters/EmailAdapter";

const smsSender = new SMSSender();
smsSender.sendMessage("Your OTP is 123456", "123-456-7890");

const emailSender = new EmailAdapter();
emailSender.sendMessage("Your OTP is 123456", "test@example.com");
