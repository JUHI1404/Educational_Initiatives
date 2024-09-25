import { MessageSender } from "../models/MessageSender";
import { EmailService } from "../services/EmailServices";

export class EmailAdapter implements MessageSender {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  sendMessage(content: string, recipient: string): void {
    const subject = "Notification";
    this.emailService.sendEmail(subject, content, recipient);
  }
}