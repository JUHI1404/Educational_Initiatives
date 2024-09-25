import { MessageSender } from '../models/MessageSender';  

export class SMSSender implements MessageSender {
  sendMessage(content: string, recipient: string): void {
    console.log(`Sending SMS to ${recipient}: ${content}`);
  }
}
