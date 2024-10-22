export class Canvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    
    constructor(canvasElement: HTMLCanvasElement) {
        const canvas = canvasElement!;
        const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

        this.canvas = canvas;
        this.context = context;

        this.resizeCanvas = this.resizeCanvas.bind(this); // Bind resizeCanvas to the class instance
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas);
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    canvasSize() {  
        return {
            width: this.canvas.width,
            height: this.canvas.height
        }
    }

    // Optionally, you may want to add a cleanup method to remove the event listener
    cleanup() {
        window.removeEventListener('resize', this.resizeCanvas);
    }
}
