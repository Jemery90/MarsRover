import { MarsRover } from "../main/marsRover";

describe('MarsRover', () => {
    it('should be able to initialise a new Mars Rover', () => {
        const marsRover = new MarsRover(1, 1, 'S');
        expect(marsRover).toBeDefined();
    });
    describe('Given a move command', () => {
        it.each([
            ['S', '1:0:S'],
            ['W', '0:1:W'],
            ['E', '2:1:E'],
            ['N', '1:2:N'],
            ['B', '1:1:B']
        ]
        )('When the rover is facing %s it should in that direction', (direction: string, expectedCoordinates: string) => {
            const marsRover = new MarsRover(1, 1, direction);
            marsRover.processCommands('M');
            expect(marsRover.getCoordinateAndDirection()).toBe(expectedCoordinates);
        });

    });
    describe('Given a turn right command', () => {
        it('When the rover is facing north should rotate to face east', () => {
            const marsRover = new MarsRover(1, 1, 'N');
            marsRover.processCommands('R');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:E');
        });
        it('When the rover is facing east should rotate to face south', () => {
            const marsRover = new MarsRover(1, 1, 'E');
            marsRover.processCommands('R');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:S');
        });
        it('When the rover is facing south should rotate to face west', () => {
            const marsRover = new MarsRover(1, 1, 'S');
            marsRover.processCommands('R');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:W');
        });
        it('When the rover is facing west should rotate to face north', () => {
            const marsRover = new MarsRover(1, 1, 'W');
            marsRover.processCommands('R');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:N');
        });
    });
    describe('Given a turn left command', () => {
        it('When the rover is facing north should rotate to face west', () => {
            const marsRover = new MarsRover(1, 1, 'N');
            marsRover.processCommands('L');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:W');
        });
        it('When the rover is facing west should rotate to face south', () => {
            const marsRover = new MarsRover(1, 1, 'W');
            marsRover.processCommands('L');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:S');
        });
        it('When the rover is facing south should rotate to face east', () => {
            const marsRover = new MarsRover(1, 1, 'S');
            marsRover.processCommands('L');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:E');
        });
        it('When the rover is facing east should rotate to face north', () => {
            const marsRover = new MarsRover(1, 1, 'E');
            marsRover.processCommands('L');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:N');
        });
    });
    describe('Given few commands', () => {
        it('Should process each of the command given', () => {
            const marsRover = new MarsRover(1, 1, 'E');
            marsRover.processCommands('LMMMR');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:4:E');
        });
    });
});
