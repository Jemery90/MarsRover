export class MarsRover {
    private xCoordinate: number;
    private yCoordinate: number;
    private direction: string;

    constructor(xCoordinate: number, yCoordinate: number, direction: string) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.direction = direction;
    }

    move(command: string) {
        if (this.direction === 'W') {
            this.xCoordinate--;
        } else if (this.direction === 'E') {
            this.xCoordinate++;
        } else {
            this.yCoordinate--;
        }

    }

    getCoordinate(): string {
        return this.xCoordinate + ':' + this.yCoordinate;
    }
}