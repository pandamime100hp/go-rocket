import { Star } from '../../../../../../src/utility/animation/space/src/generic/star';

describe('Star Class', () => {
    let star: Star;

    beforeEach(() => {
        star = new Star(800, 600); // Assuming a canvas size of 800x600
    });

    test('should initialize with correct properties', () => {
        expect(star.canvasWidth).toBe(800);
        expect(star.canvasHeight).toBe(600);
        expect(star.centerX).toBe(400); // Half of canvas width
        expect(star.centerY).toBe(300); // Half of canvas height
        expect(star.radius).toBeGreaterThan(30); // As per the radius initialization logic
        expect(star.size).toBeLessThanOrEqual(1); // Size should be between 0 and 1
        expect(star.color).toBe('rgba(255, 255, 255, 0.8)');
        expect(star.isTwinkling).toEqual(expect.any(Boolean)); // Should be either true or false
    });

    test('should set position correctly', () => {
        star.angle = Math.PI / 2; // Set angle to 90 degrees
        star.setPosition();
        
        expect(star.x).toBeCloseTo(star.centerX, 1); // Should be equal to centerX
        expect(star.y).toBeCloseTo(star.centerY + star.radius, 1); // Should be equal to centerY + radius
    });

    test('should return correct position', () => {
        star.angle = Math.PI / 4; // Set angle to 45 degrees
        star.setPosition();
        
        const { x, y } = star.getPosition();
        expect(x).toBeCloseTo(star.centerX + star.radius * Math.cos(star.angle), 1);
        expect(y).toBeCloseTo(star.centerY + star.radius * Math.sin(star.angle), 1);
    });

    test('should update position and twinkle opacity', () => {
        const initialOpacity = star.twinkleOpacity;

        star.update();
        
        expect(star.angle).toBeGreaterThan(0); // Ensure angle has changed
        expect(star.x).not.toBe(initialOpacity); // Ensure position has been updated
        expect(star.y).not.toBe(initialOpacity); // Ensure position has been updated
        if (star.isTwinkling) {
            expect(star.twinkleOpacity).not.toBe(initialOpacity); // Check that twinkle opacity has changed
        }
    });

    test('should draw star with correct opacity', () => {
        const canvasMock = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            fillStyle: '',
        } as unknown as CanvasRenderingContext2D;

        star.draw(canvasMock);

        expect(canvasMock.beginPath).toHaveBeenCalled();
        expect(canvasMock.arc).toHaveBeenCalledWith(star.x, star.y, star.size, 0, Math.PI * 2);
        expect(canvasMock.fillStyle).toBe(`rgba(255, 255, 255, ${star.isTwinkling ? star.twinkleOpacity : 1})`);
        expect(canvasMock.fill).toHaveBeenCalled();
    });
});