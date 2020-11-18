export class IdGenerator {
    private static lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    private static upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private static numbers = '0123456789';

    static getId() {
        const allLetters = this.lowerAlphabet + this.upperAlphabet + this.numbers;
        let id = '';
        for (let i = 0; i < 8; i++) {
            const index = Math.floor(Math.random() * allLetters.length);
            id += allLetters[index];
        }
        return id;
    }
}