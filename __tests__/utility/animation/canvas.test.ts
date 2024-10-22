import { Canvas } from "../../../src/utility/animation/canvas"; // Adjust the import path as necessary

describe('Canvas Class', () => {
    let canvasElementMock: HTMLCanvasElement;
    let canvas: Canvas;
    let addEventListenerSpy: jest.SpyInstance;
    let removeEventListenerSpy: jest.SpyInstance;

    beforeEach(() => {
        // Mocking a canvas element and its context
        canvasElementMock = document.createElement('canvas');
        canvasElementMock.getContext = jest.fn(() => ({
            fillRect: jest.fn(),
            clearRect: jest.fn(),
            fillStyle: '',
        })) as HTMLCanvasElement['getContext'];

        // Mock window methods
        addEventListenerSpy = jest.spyOn(window, 'addEventListener');
        removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

        // Instantiate the Canvas class
        canvas = new Canvas(canvasElementMock);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should initialize with correct properties', () => {
        expect(canvas.canvas).toBe(canvasElementMock);
        const context = canvasElementMock.getContext('2d');
        expect(canvas.context.toString()).toBe(context.toString());
        expect(canvas.context.fillStyle).toBe("");
        expect(typeof canvas.context.clearRect).toBe("function");
        expect(typeof canvas.context.fillRect).toBe("function");
    });

    test('should resize canvas to window inner dimensions', () => {
        // Mock window.innerWidth and innerHeight
        window.innerWidth = 1200;
        window.innerHeight = 800;

        canvas.resizeCanvas();

        expect(canvas.canvas.width).toBe(1200);
        expect(canvas.canvas.height).toBe(800);
    });

    test('should return correct canvas size', () => {
        // Mock canvas dimensions
        canvas.canvas.width = 1024;
        canvas.canvas.height = 768;

        const size = canvas.canvasSize();

        expect(size.width).toBe(1024);
        expect(size.height).toBe(768);
    });

    test('should remove resize event listener on cleanup', () => {
        canvas.cleanup();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', canvas.resizeCanvas);
    });
});