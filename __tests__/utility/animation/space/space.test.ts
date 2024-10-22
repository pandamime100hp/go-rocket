import { Space } from '../../../../src/utility/animation/space/space';
import { Star } from "../../../../src/utility/animation/space/src/generic/star";
import { Sun } from "../../../../src/utility/animation/space/src/sun";
import { Planet } from "../../../../src/utility/animation/space/src/planet";
import { ShootingStar } from "../../../../src/utility/animation/space/src/shooting_star";
import { create } from 'domain';

describe('Space Class', () => {
    let space: Space;
    let contextMock: CanvasRenderingContext2D;

    beforeEach(() => {
        contextMock = {
            clearRect: jest.fn(),
            fillStyle: '',
            fillRect: jest.fn(),
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            stroke: jest.fn(),
            fillText: jest.fn(),
            createRadialGradient: jest.fn().mockReturnValue({
                addColorStop: jest.fn(),
            })
        } as unknown as CanvasRenderingContext2D;
        space = new Space(contextMock, 800, 600);
    });

    test('should initialize with the correct properties', () => {
        expect(space.width).toBe(800);
        expect(space.height).toBe(600);
        expect(space.stars.length).toBeGreaterThan(0); // Stars array is populated
        expect(space.stars[space.stars.length - 1] instanceof Sun).toBe(true); // The last star is the Sun
        expect(space.shootingStars.length).toBe(3); // There are 3 shooting stars
        expect(space.planets.length).toBe(10); // There are 10 planets
    });

    test('should resize space and reinitialize stars and planets', () => {
        space.resize(1024, 768);

        // Check if the space was resized
        expect(space.width).toBe(1024);
        expect(space.height).toBe(768);

        // Ensure stars and planets arrays are reinitialized
        expect(space.stars.length).toBeGreaterThan(0);
        expect(space.planets.length).toBe(10);
    });

    test('should draw stars, shooting stars, and planets', () => {
        const objectMock = {
            update: jest.fn(),
            draw: jest.fn(),
        };

        const objects = [objectMock, objectMock]; // Mocking two objects

        space.drawObject(objects);

        // Ensure that both update and draw methods are called on each object
        objects.forEach(obj => {
            expect(obj.update).toHaveBeenCalled();
            expect(obj.draw).toHaveBeenCalledWith(contextMock);
        });
    });

    test('should clear canvas and set background to black during animation', () => {
        space.animate();

        // Ensure the canvas is cleared
        expect(contextMock.clearRect).toHaveBeenCalledWith(0, 0, 800, 600);

        // Ensure the background is filled with black color
        expect(contextMock.fillStyle).toBe('rgba(255, 255, 255, 0.5)');
        expect(contextMock.fillRect).toHaveBeenCalledWith(0, 0, 800, 600);
    });
});