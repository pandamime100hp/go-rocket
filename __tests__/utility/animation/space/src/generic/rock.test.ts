import { Rock } from '../../../../../../src/utility/animation/space/src/generic/rock';

describe('Rock Class', () => {
    let rock: Rock;

    beforeEach(() => {
        rock = new Rock(800, 600); // Assuming a canvas size of 800x600
    });

    test('should initialize with correct properties', () => {
        expect(rock.canvasWidth).toBe(800);
        expect(rock.canvasHeight).toBe(600);
        expect(rock.centerX).toBe(400); // Half of canvas width
        expect(rock.centerY).toBe(300); // Half of canvas height
        expect(rock.radius).toBeGreaterThan(30); // As per the radius initialization logic
    });

    test('should set position correctly', () => {
        rock.angle = Math.PI / 2; // Set angle to 90 degrees
        rock.setPosition();
        
        expect(rock.x).toBeCloseTo(rock.centerX, 1); // Should be equal to centerX
        expect(rock.y).toBeCloseTo(rock.centerY + rock.radius, 1); // Should be equal to centerY + radius
    });

    test('should return correct position', () => {
        rock.angle = Math.PI / 4; // Set angle to 45 degrees
        rock.setPosition();
        
        const { x, y } = rock.getPosition();
        expect(x).toBeCloseTo(rock.centerX + rock.radius * Math.cos(rock.angle), 1);
        expect(y).toBeCloseTo(rock.centerY + rock.radius * Math.sin(rock.angle), 1);
    });
});
