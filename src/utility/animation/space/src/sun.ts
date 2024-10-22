import { Star } from "./generic/star";

export class Sun extends Star {

    constructor(canvasWidth: number, canvasHeight: number) {
        super(canvasWidth, canvasHeight);
        this.radius = 0;
        this.angle = 0;
        this.size = 30;
        this.speed = 0;
        this.color = 'rgba(255, 255, 255, 1)';
        this.isTwinkling = false;
        this.twinkleOpacity = 1;
        this.twinkleSpeed = 0;
    }

    draw(context: CanvasRenderingContext2D): void {
        super.draw(context);
        // Draw radial gradient for light from the center star
        const gradient = context.createRadialGradient(this.centerX, this.centerY, 0, this.centerX, this.centerY, 600);
        gradient.addColorStop(0, 'rgba(255, 255, 150, 0.3)'); // Center color (light yellow)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)'); // Outer color (transparent)
        context.fillStyle = gradient;
        context.fillRect(0, 0, this.canvasWidth, this.canvasHeight); // Fill the canvas with the gradient
    }
}
