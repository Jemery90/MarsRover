export class MarsRover {
    private xCoordinate: number;
    private yCoordinate: number;
    private direction: string;

    constructor(xCoordinate: number, yCoordinate: number, direction: string) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.direction = direction;
    }

    moveForward() {
        switch(this.direction){
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

    rotateRight() {
        if (this.direction === 'N') {
            this.direction = 'E';
        }
        else if (this.direction === 'E') {
            this.direction = 'S';
        }
    }

    processCommand(command: string) {
        if (command === 'M') {
            this.moveForward();
        } else {
            this.rotateRight();
        }

    }

    getCoordinateAndDirection(): string {
        return  `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
    }
}