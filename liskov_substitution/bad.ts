/*
At a circus, a husky dog is a very good performer, it is well known
by his speaking ability. However, one day, he has an accident, and
he need a few days off to fully recovered. Another dog (an samoyed one) temporaryly
replace his position, but he is known by his walking on his 2 legs
ability. LiskovSubstitution required us to be FLEXIBLE when changing
a husky and a samoyed position.
*/
export class HuskyDog {
    constructor() { }

    speak(): string {
        return 'Hello there! I am a dog and I can speak!';
    }   
}

export class SamoyedDog {
    constructor() { }

    runByTwoLegs(): string {
        return 'Hello there! I am a dog and I can run by two legs!';
    }   
}

let performer: HuskyDog = new HuskyDog();
performer.speak();

// change the performer.
let substituteperformer: SamoyedDog = new SamoyedDog();
substituteperformer.runByTwoLegs();

