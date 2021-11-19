/*
The solution for this is that we can use interface to increase
FLEXIBILITY in changing those two dogs.
*/
export interface Performer {
    perform(): string;
}
export class HuskyDog implements Performer {
    constructor() { }
    speak(): string {
        return 'Hello there! I am a dog and I can speak!';
    }  
    perform(): string {
        return this.speak();
    } 
}

export class SamoyedDog implements Performer {
    constructor() { }
    runByTwoLegs(): string {
        return 'Hello there! I am a dog and I can run by two legs!';
    }     
    perform(): string {
        return this.runByTwoLegs();
    } 
}

// We can simply change the performer by changing class name;
let performer: Performer = new HuskyDog();
performer.perform();