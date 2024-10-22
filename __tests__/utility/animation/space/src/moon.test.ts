import { Moon } from '../../../../../src/utility/animation/space/src/moon';

describe('Moon Class', () => {
    let moon: Moon;

    beforeEach(() => {
        moon = new Moon(800, 600, 400, 300, Math.PI / 4, 'Earth'); // Position moon around Earth at angle 45 degrees
    });

    test('should initialize with correct properties', () => {
        expect(moon.canvasWidth).toBe(800);
        expect(moon.canvasHeight).toBe(600);
        expect(moon.planetIndex).toBe('Earth');
        expect(moon.moonIndex).toBeGreaterThanOrEqual(0);
        expect(moon.moonIndex).toBeLessThan(1000);
        expect(moon.size).toBeGreaterThan(5); // Size should be greater than 5
        expect(moon.size).toBeLessThanOrEqual(15); // Size should be less than or equal to 15
        expect(moon.red).toBeGreaterThan(150);
        expect(moon.green).toBeGreaterThan(150);
        expect(moon.blue).toBeGreaterThan(150);
        expect(moon.alpha).toBeGreaterThan(0.1);
        expect(moon.alpha).toBeLessThanOrEqual(0.6);
    });

    test('should set position correctly', () => {
        moon.angle = Math.PI / 2; // Set angle to 90 degrees
        moon.setPosition();

        expect(moon.x).toBeCloseTo(moon.centerX + moon.orbitRadius * Math.cos(moon.angle), 1);
        expect(moon.y).toBeCloseTo(moon.centerY + moon.orbitRadius * Math.sin(moon.angle), 1);
    });

    test('should update position based on angle', () => {
        const initialX = moon.x;
        const initialY = moon.y;

        moon.update();

        expect(moon.angle).toBeLessThan(Math.PI / 4); // Ensure angle has decreased
        expect(moon.x).not.toBe(initialX); // Ensure x position has been updated
        expect(moon.y).not.toBe(initialY); // Ensure y position has been updated
    });

    test('should draw moon with correct properties', () => {
        const canvasMock = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            fillStyle: '',
            fillText: jest.fn(),
            font: '',
        } as unknown as CanvasRenderingContext2D;

        moon.color = 'white';
        moon.draw(canvasMock);

        expect(canvasMock.beginPath).toHaveBeenCalled();
        expect(canvasMock.arc).toHaveBeenCalledWith(moon.x, moon.y, moon.size, 0, Math.PI * 2);
        expect(canvasMock.fillStyle).toBe(moon.color);
        expect(canvasMock.fill).toHaveBeenCalled();
        expect(canvasMock.fillText).toHaveBeenCalledWith(`Planet: ${moon.planetIndex}, Moon: ${moon.moonIndex}`, moon.x + moon.size + 5, moon.y);
    });
});