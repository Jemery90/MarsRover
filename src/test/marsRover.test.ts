class MarsRover {
    private xCoordinate: number = 0;
    private yCoordinate: number = 0;
    private direction: string = 'N';

    constructor(xCoordinate: number, yCoordinate: number, direction: string) {
           this.xCoordinate = xCoordinate;
           this.yCoordinate = yCoordinate;
           this.direction = direction;
    }
    move(command: string){
        this.yCoordinate -- ;
    }
    getCoordinate():string{
        return this.xCoordinate + ':' + this.yCoordinate;
    }
}

describe('MarsRover', () => {
    it('should be able to initialise a new Mars Rover', () => {
        const marsRover = new MarsRover(0, 0, 'S');
       expect(marsRover).toBeDefined();
    });
    it('First move', () => {
        const marsRover = new MarsRover(0, 0, 'S');
        marsRover.move('M');
       expect(marsRover.getCoordinate()).toBe('0:-1');
    });
    it('Second move', () => {
        const marsRover = new MarsRover(0, 0, 'W');
        marsRover.move('M');
       expect(marsRover.getCoordinate()).toBe('-1:0');
    });
});