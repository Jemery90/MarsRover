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

    getCoordinateAndDirection(): string {
        return  `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
    }
}