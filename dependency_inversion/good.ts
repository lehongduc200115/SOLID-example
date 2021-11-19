/*
The better way is that we will use interfaces, this will loose the
coupling between those dependencies 
*/
export class Drawer {
    constructor(
        public tool: Tool
    ) { }
    
    draw(): string { 
        return this.tool.write();
    }
}
export interface Tool {
    write(): string;
}
export class Pencil implements Tool {
    write(): string {
        return 'This image is drawn solely by Pencil!';
    }
}
export class Pen implements Tool {
    write(): string {
        return 'This image is drawn solely by Pen!';
    }
}

let painter: Drawer = new Drawer(
    new Pencil()
);

// This should return 'This image is drawn solely by Pencil!'
painter.draw();

//------------------------

let anotherPainter: Drawer = new Drawer(
    new Pen()
);

// This should return 'This image is drawn solely by Pencil!'
anotherPainter.draw();