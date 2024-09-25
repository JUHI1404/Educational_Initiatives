export interface MessageSender {
    sendMessage(content: string, recipient: string): void;
  }