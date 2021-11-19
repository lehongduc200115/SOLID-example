/*
The Painter can use multiple tool to create a vivid picture.
However, it is not good if we strongly coupling tool for him.
*/
enum Tool {
    PENCIL,
    PEN
}
export class Drawer {
    constructor(
        public tool: Pencil | Pen
    ) { }
    
    draw(): string { 
        if (this.tool.name === Tool.PENCIL)
            return this.tool.writeByPencil();
        if (this.tool.name === Tool.PEN)
            return this.tool.writeByPen();
    }
}

export class Pencil {
    public name: Tool
    constructor() {
        this.name = Tool.PENCIL;
    }
    writeByPencil(): string {
        return 'This image is drawn solely by Pencil!';
    }
}
export class Pen {
    public name: Tool
    constructor() {
        this.name = Tool.PEN;
    }
    writeByPen(): string {
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