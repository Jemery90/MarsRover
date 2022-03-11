import {MarsRover} from "../main/marsRover";

describe('MarsRover', () => {
    it('should be able to initialise a new Mars Rover', () => {
        const marsRover = new MarsRover(1, 1, 'S');
       expect(marsRover).toBeDefined();
    });
    describe('Given a move command', () => {
        it('When the rover is facing south it should move south', () => {
            const marsRover = new MarsRover(1, 1, 'S');
            marsRover.move('M');
           expect(marsRover.getCoordinate()).toBe('1:0');
        });
        it('When the rover is facing west it should move west', () => {
            const marsRover = new MarsRover(1, 1, 'W');
            marsRover.move('M');
           expect(marsRover.getCoordinate()).toBe('0:1');
        });
        it('When the rover is facing east it should move east', () => {
            const marsRover = new MarsRover(1, 1, 'E');
            marsRover.move('M');
           expect(marsRover.getCoordinate()).toBe('2:1');
        });
        it('When the rover is facing north it should move north', () => {
            const marsRover = new MarsRover(1, 1, 'N');
            marsRover.move('M');
            expect(marsRover.getCoordinate()).toBe('1:2');
        });
    });
});