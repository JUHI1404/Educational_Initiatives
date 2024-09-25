export class EmailService {
    sendEmail(subject: string, body: string, to: string): void {
      console.log(`Sending Email to ${to} with subject: ${subject}\nBody: ${body}`);
    }
  }
  