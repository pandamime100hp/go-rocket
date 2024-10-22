import { Sun } from '../../../../../src/utility/animation/space/src/sun';

describe('Sun Class', () => {
    let sun: Sun;
    let canvasMock: any;

    beforeEach(() => {
        canvasMock = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            stroke: jest.fn(),
            fillStyle: '',
            fillRect: jest.fn(), // Mock fillRect
            createRadialGradient: jest.fn().mockReturnValue({
                addColorStop: jest.fn(), // Mock addColorStop
            }), // Mock createRadialGradient
        };

        sun = new Sun(800, 600); // Initialize with canvas dimensions
    });

    test('should initialize with correct properties', () => {
        expect(sun.canvasWidth).toBe(800);
        expect(sun.canvasHeight).toBe(600);
        expect(sun.radius).toBe(0); // Sun radius is 0
        expect(sun.angle).toBe(0); // Sun angle is 0
        expect(sun.size).toBe(30); // Sun size is 30
        expect(sun.speed).toBe(0); // Sun doesn't move
        expect(sun.color).toBe('rgba(255, 255, 255, 1)'); // White color
        expect(sun.isTwinkling).toBe(false); // Sun does not twinkle
        expect(sun.twinkleOpacity).toBe(1); // Twinkle opacity is 1 (non-twinkling)
        expect(sun.twinkleSpeed).toBe(0); // No twinkle speed since it doesn't twinkle
    });

    test('should draw the sun correctly', () => {
        sun.draw(canvasMock);

        // Check if `createRadialGradient` is called with correct parameters
        expect(canvasMock.createRadialGradient).toHaveBeenCalledWith(sun.centerX, sun.centerY, 0, sun.centerX, sun.centerY, 600);
        
        // Check if the gradient's color stops are defined
        const gradientMock = canvasMock.createRadialGradient.mock.results[0].value;
        expect(gradientMock.addColorStop).toHaveBeenCalledWith(0, 'rgba(255, 255, 150, 0.3)'); // Inner color
        expect(gradientMock.addColorStop).toHaveBeenCalledWith(1, 'rgba(255, 255, 255, 0.0)'); // Outer color

        // Check if `fillRect` is called to fill the entire canvas
        expect(canvasMock.fillRect).toHaveBeenCalledWith(0, 0, 800, 600);
    });

    test('should inherit star drawing behavior', () => {
        sun.draw(canvasMock);

        // Check that the star's circular shape is drawn with the correct size
        expect(canvasMock.beginPath).toHaveBeenCalled();
        expect(canvasMock.arc).toHaveBeenCalledWith(sun.x, sun.y, sun.size, 0, Math.PI * 2);
        expect(canvasMock.fill).toHaveBeenCalled();
    });
});