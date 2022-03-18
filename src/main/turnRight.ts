import { Command } from "./command";
import { MarsRover } from "./marsRover";

export class TurnRight implements Command {
    private marsRover : MarsRover;

    constructor(marsRover:MarsRover){
        this.marsRover = marsRover;
    }

    execute(): void {
        const direction = this.marsRover.getDirection();
        if (direction === 'N') {
            this.marsRover.setDirection('E');
        }
        else if (direction === 'E') {
            this.marsRover.setDirection('S');
        }
        else if (direction === 'S') {
            this.marsRover.setDirection('W');
        }
        else if (direction === 'W') {
            this.marsRover.setDirection('N');
        }
    }
}