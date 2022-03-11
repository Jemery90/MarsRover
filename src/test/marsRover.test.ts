import { isElementAccessChain } from "typescript";
import {MarsRover} from "../main/marsRover";

describe('MarsRover', () => {
    it('should be able to initialise a new Mars Rover', () => {
        const marsRover = new MarsRover(1, 1, 'S');
       expect(marsRover).toBeDefined();
    });
    describe('Given a move command', () => {
        it.each([
            ['S', '1:0'],
            ['W', '0:1'],
            ['E', '2:1'],
            ['N', '1:2'],
            ['B', '1:1']
        ]
        )('When the rover is facing %s it should in that direction', (direction:string, expectedCoordinates:string) =>{
            const marsRover = new MarsRover(1, 1, direction);
            marsRover.move('M');
           expect(marsRover.getCoordinate()).toBe(expectedCoordinates);
        })
        
    });
});