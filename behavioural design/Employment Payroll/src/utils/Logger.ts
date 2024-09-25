import * as readline from "readline";

export class Logger {
    static log(message: string): void {
        console.log(`[INFO]: ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR]: ${message}`);
    }

   
    private static rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    static askQuestion(query: string): Promise<string> {
        return new Promise((resolve) => {
            Logger.rl.question(query, (answer) => {
                resolve(answer);
            });
        });
    }

    static closeInput(): void {
        Logger.rl.close();
    }
}
