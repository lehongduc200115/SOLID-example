import fs from 'fs';

export class Book {
    readonly BAD_WORDS: string[] = ['Badwords1', 'Badwords2', 'Badwords3'];
    constructor(
        public name: string,
        public author: string,
        public content: string
    ) {}

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
}

// To resolve this violation, we need to create a function which is
// used to mainly Printing Books.
export class BookPrinter {
    printContentToConsole(content: string): void {
        console.log(content);
    }  

    printContentToHtmlPage(content: string): void {
        let htmlContent: string = "<html>" + content + "</html>";
        fs.writeFileSync('index.html', htmlContent);
    }
}