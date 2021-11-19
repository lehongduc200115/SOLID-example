/*
This implements is much more efficient and understandable.
It was resolve by using seperate interface. (1 larger one -> 3 smaller ones).
*/
export interface MotorFixing {
    fixTheMotor(): string;
}
export interface MotorTesting {
    testTheMotor(): string;
}
export interface MotorRacing {
    attendTheRaceUsingTheMotor(): string;
}

export class Racer implements MotorTesting, MotorRacing {
    testTheMotor(): string {
        return 'The motor tested successfully';
    }
    attendTheRaceUsingTheMotor(): string {
        return 'Attended the race and got a prize!';
    }
}

export class Fixer implements MotorTesting, MotorFixing {
    fixTheMotor(): string {
        return 'The motor fixed successfully';
    }
    testTheMotor(): string {
        return 'The motor tested successfully';
    }
}