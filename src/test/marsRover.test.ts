import { isElementAccessChain } from "typescript";
import {MarsRover} from "../main/marsRover";

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
        )('When the rover is facing %s it should in that direction', (direction:string, expectedCoordinates:string) =>{
            const marsRover = new MarsRover(1, 1, direction);
            marsRover.move('M');
           expect(marsRover.getCoordinateAndDirection()).toBe(expectedCoordinates);
        });
        
    });
    describe('Given a turn right command', () => {
        it('The rover should rotate right', () => {
            const marsRover = new MarsRover(1, 1, 'N');
            marsRover.move('R');
            expect(marsRover.getCoordinateAndDirection()).toBe('1:1:E');
        })
    })
});