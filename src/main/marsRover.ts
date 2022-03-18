import { TurnRight } from "./turnRight";

const xBound = 10;
const yBound = 10;

export class MarsRover {
    private xCoordinate: number;
    private yCoordinate: number;
    private direction: string;

    constructor(xCoordinate: number, yCoordinate: number, direction: string) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.direction = direction;
    }

    getDirection(){
        return this.direction;
    }

    setDirection(direction:string){
        this.direction = direction;
    }

    roverIsAtEasternEdgeOfBoard() {
        return this.xCoordinate === xBound;
    }

    roverIsAtNorthenEdgeOfBoard() {
        return this.yCoordinate === yBound;
    }

    moveForward() {
        if (this.roverIsAtEasternEdgeOfBoard()) {
            this.xCoordinate = 0;
            return;
        }

        if (this.roverIsAtNorthenEdgeOfBoard()) {
            this.yCoordinate = 0;
            return;
        }

        switch (this.direction) {
            case 'W':
                this.xCoordinate--;
                break
            case 'E':
                this.xCoordinate++;
                break
            case 'N':
                this.yCoordinate++;
                break
            case 'S':
                this.yCoordinate--;
        }
    }

    rotateLeft() {
        if (this.direction === 'N') {
            this.direction = 'W';
        }
        else if (this.direction === 'W') {
            this.direction = 'S';
        }
        else if (this.direction === 'S') {
            this.direction = 'E';
        }
        else if (this.direction === 'E') {
            this.direction = 'N';
        }
    }

    processCommands(command: string) {
        for (let commandIndex = 0; commandIndex < command.length; commandIndex++) {
            this.processCommand(command[commandIndex]);
        }
    }

    processCommand(command: string) {
        if (command === 'M') {
            this.moveForward();
        } else if (command === 'R') {
            new TurnRight(this).execute();
        } else {
            this.rotateLeft();
        }

    }

    getCoordinateAndDirection(): string {
        return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
    }
}