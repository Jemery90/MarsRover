class MarsRover {
    private xCoordinate: number = 0;
    private yCoordinate: number = 0;
    private direction: string = 'N';

    constructor(xCoordinate: number, yCoordinate: number, direction: string) {
           this.xCoordinate = xCoordinate;
           this.yCoordinate = yCoordinate;
           this.direction = direction;
    }
}

describe('MarsRover', () => {
    it('should be able to initialise a new Mars Rover', () => {
        const marsRover = new MarsRover(0, 0, 'S');
       expect(marsRover).toBeDefined();
    });
});