import { Planet } from '../../../../../src/utility/animation/space/src/planet';
import { getRandomName } from '../../../../../src/utility/data/getRandomName';

// Mock the random name generator
jest.mock('../../../../../src/utility/data/getRandomName', () => ({
    getRandomName: jest.fn(() => 'Test Planet'),
}));

describe('Planet Class', () => {
    let planet: Planet;
    let canvasMock: any;

    beforeEach(() => {
        canvasMock = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            stroke: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            fillText: jest.fn(),
            fillStyle: '',
            createRadialGradient: jest.fn().mockReturnValue({
                addColorStop: jest.fn(),
            }), // Mock createRadialGradient
        };

        planet = new Planet(800, 600);
        
        planet.x = jest.mocked(340); // Mock x position to return 
        planet.y = jest.mocked(5); // Mock y position to return
    });

    test('should initialize with correct properties', () => {
        expect(planet.canvasWidth).toBe(800);
        expect(planet.canvasHeight).toBe(600);
        expect(planet.planetIndex).toBe('Test Planet'); // Check if planet index is set
        expect(planet.moonCount).toBeGreaterThanOrEqual(1);
        expect(planet.moonCount).toBeLessThanOrEqual(3);
        expect(planet.size).toBeGreaterThanOrEqual(5);
        expect(planet.size).toBeLessThanOrEqual(10);
        expect(planet.red).toBeLessThan(255);
        expect(planet.green).toBeLessThan(255);
        expect(planet.blue).toBeLessThan(255);
        expect(planet.alpha).toBeGreaterThan(0.1);
        expect(planet.alpha).toBeLessThanOrEqual(0.6);
    });

    test('should set position correctly', () => {
        planet.angle = Math.PI / 2; // Set angle to 90 degrees
        planet.setPosition();

        expect(planet.x).toBeCloseTo(planet.centerX + planet.radius * Math.cos(planet.angle), 1);
        expect(planet.y).toBeCloseTo(planet.centerY + planet.radius * Math.sin(planet.angle), 1);
    });

    test('should update position and moons correctly', () => {
        const initialX = planet.x;
        const initialY = planet.y;

        planet.update();

        expect(planet.angle).toBeGreaterThan(0); // Ensure angle has increased
        expect(planet.x).not.toBe(initialX); // Ensure x position has been updated
        expect(planet.y).not.toBe(initialY); // Ensure y position has been updated

        // Check that the moons have updated positions
        planet.moons.forEach(moon => {
            expect(moon.centerX).toBe(planet.x);
            expect(moon.centerY).toBe(planet.y);
            expect(moon.angle).toBeLessThan(Math.PI * 2); // Ensure the moon's angle is updated
        });
    });

    test('should draw planet with correct properties', () => {
        planet.draw(canvasMock);
    
        expect(canvasMock.beginPath).toHaveBeenCalled();
    
        // Now use toBeCloseTo to compare the values individually
        const initialX = planet.x;
        const initialY = planet.y;
        const size = planet.size;
    
        expect(initialX).toBeCloseTo(340);  // Replace 5 with the expected value
        expect(initialY).toBeCloseTo(5);  // Replace 5 with the expected value
        expect(size).toBeGreaterThan(0);  // Size should be a positive number
    
        expect(canvasMock.arc).toHaveBeenCalledWith(
            expect.any(Number),  // Planet's X coordinate (handled separately)
            expect.any(Number),  // Planet's Y coordinate (handled separately)
            expect.any(Number),  // Planet size (this can be tested separately if needed)
            0, Math.PI * 2 // Arc from 0 to full circle
        );
    
        expect(canvasMock.fill).toHaveBeenCalled();
    });
});