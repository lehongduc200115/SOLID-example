/*
In order to working with the motor, there are 3 actions can perform:
- Fix the motor.
- Test the motor.
- Attend the race using the motor.
Normally, the fixer can fix the motor, the racer can use the motor
to attend the race, both can test the motor.
The problem here is that, this interface is too large for a person
to work on (as explained above), .i.e. the fixer cannot attend the race,
the racer cannot fix the motor.
*/
export interface MotorManipulation {
    fixTheMotor(): string;
    testTheMotor(): string;
    attendTheRaceUsingTheMotor(): string;
}

export class Racer implements MotorManipulation {
    fixTheMotor(): string {
        return 'Sorry, I cannot fix the motor';
    }
    testTheMotor(): string {
        return 'The motor tested successfully';
    }
    attendTheRaceUsingTheMotor(): string {
        return 'Attended the race and got a prize!';
    }
}

export class Fixer implements MotorManipulation {
    fixTheMotor(): string {
        return 'The motor fixed successfully';
    }
    testTheMotor(): string {
        return 'The motor tested successfully';
    }
    attendTheRaceUsingTheMotor(): string {
        return 'Sorry, I cannot attend the race';
    }
}