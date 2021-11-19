export class Book {
    readonly BAD_WORDS: string[] = ['Badwords1', 'Badwords2', 'Badwords3'];
    constructor(
        public name: string,
        public author: string,
        public content: string
    ) {}

    // Some methods working directly with properties.
    // They are OK.
    getContentLength(): number {
        return this.content.length;
    }

    containsBadWords(): boolean {
        let containsBadWords: boolean = false;
        this.BAD_WORDS.forEach(word => {
            containsBadWords = containsBadWords && this.content.includes(word);
        })
        return containsBadWords;
    }

    // Implement printContent function. Violate Single Responsibility Principle.
    // as mentioned each class should only have one functionality.
    // In this case, Book should only be used for containing Books. 
    printContentToConsole(): void {
        console.log(this.content);
    }
}
