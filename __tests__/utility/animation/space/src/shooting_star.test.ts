import { ShootingStar } from '../../../../../src/utility/animation/space/src/shooting_star';

describe('ShootingStar Class', () => {
    let shootingStar: ShootingStar;

    beforeEach(() => {
        shootingStar = new ShootingStar(800, 600); // Initialize with canvas dimensions
    });

    test('should initialize with correct properties', () => {
        expect(shootingStar.canvasWidth).toBe(800);
        expect(shootingStar.canvasHeight).toBe(600);
        expect(shootingStar.active).toBe(true); // Shooting star is initially active
        expect(shootingStar.length).toBeGreaterThanOrEqual(50);
        expect(shootingStar.length).toBeLessThanOrEqual(100);
        expect(shootingStar.speed).toBeGreaterThanOrEqual(4);
        expect(shootingStar.speed).toBeLessThanOrEqual(20);
    });

    test('should reset shooting star position correctly', () => {
        shootingStar.reset();

        // Ensure the shooting star is at a valid position within the canvas
        expect(shootingStar.x).toBeGreaterThanOrEqual(0);
        expect(shootingStar.x).toBeLessThanOrEqual(800);
        expect(shootingStar.y).toBeGreaterThanOrEqual(0);
        expect(shootingStar.y).toBeLessThanOrEqual(600);

        expect(shootingStar.length).toBeGreaterThanOrEqual(50);
        expect(shootingStar.length).toBeLessThanOrEqual(100);
        expect(shootingStar.speed).toBeGreaterThanOrEqual(4);
        expect(shootingStar.speed).toBeLessThanOrEqual(20);
        expect(shootingStar.angle).toBeGreaterThanOrEqual(0);
        expect(shootingStar.angle).toBeLessThan(Math.PI * 2);
    });

    test('should update shooting star position correctly', () => {
        const initialX = shootingStar.x;
        const initialY = shootingStar.y;

        shootingStar.update();

        expect(shootingStar.x).not.toBe(initialX); // Ensure x position has changed
        expect(shootingStar.y).not.toBe(initialY); // Ensure y position has changed
    });

    test('should deactivate shooting star when it goes off-screen', () => {
        shootingStar.x = 850; // Position outside the right boundary
        shootingStar.update();
        expect(shootingStar.active).toBe(false); // Ensure shooting star is deactivated

        shootingStar.x = -50; // Position outside the left boundary
        shootingStar.update();
        expect(shootingStar.active).toBe(false);

        shootingStar.y = 650; // Position outside the bottom boundary
        shootingStar.update();
        expect(shootingStar.active).toBe(false);

        shootingStar.y = -50; // Position outside the top boundary
        shootingStar.update();
        expect(shootingStar.active).toBe(false);
    });

    test('should draw shooting star when active', () => {
        const canvasMock = {
            strokeStyle: '',
            lineWidth: 0,
            beginPath: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            stroke: jest.fn(),
        } as unknown as CanvasRenderingContext2D;

        shootingStar.draw(canvasMock);

        // Verify that the drawing functions are called
        expect(canvasMock.beginPath).toHaveBeenCalled();
        expect(canvasMock.moveTo).toHaveBeenCalledWith(shootingStar.x, shootingStar.y);
        expect(canvasMock.lineTo).toHaveBeenCalledWith(
            expect.any(Number),
            expect.any(Number)
        );
        expect(canvasMock.stroke).toHaveBeenCalled();
    });

    test('should not draw shooting star when inactive', () => {
        const canvasMock = {
            beginPath: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            stroke: jest.fn(),
        } as unknown as CanvasRenderingContext2D;

        shootingStar.active = false;
        shootingStar.draw(canvasMock);

        // Verify that no drawing functions are called
        expect(canvasMock.beginPath).not.toHaveBeenCalled();
        expect(canvasMock.moveTo).not.toHaveBeenCalled();
        expect(canvasMock.lineTo).not.toHaveBeenCalled();
        expect(canvasMock.stroke).not.toHaveBeenCalled();
    });
});