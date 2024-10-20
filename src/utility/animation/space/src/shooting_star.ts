import { Star } from "./generic/star";

export default class ShootingStar extends Star {
    length: number;
    speed: number;
    active: boolean;

    constructor(canvasWidth: number, canvasHeight: number) {
        super(canvasWidth, canvasHeight);
        this.reset();
    }

    reset() {
        // Start shooting stars from random positions on the screen edges
        const edge = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        if (edge === 'horizontal') {
            this.x = Math.random() * this.canvasWidth;
            this.y = Math.random() < 0.5 ? 0 : this.canvasHeight;
        } else {
            this.x = Math.random() < 0.5 ? 0 : this.canvasWidth;
            this.y = Math.random() * this.canvasHeight;
        }

        this.length = Math.random() * 50 + 50; // Random length of the shooting star
        this.speed = Math.random() * 16 + 4; // Random speed
        this.angle = Math.random() * Math.PI * 2; // Random direction
        this.active = true; // Star is currently visible
    }

    update() {
        if (!this.active) return;

        // Move the shooting star
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Deactivate when it goes off-screen
        if (this.x < 0 || this.x > this.canvasWidth || this.y < 0 || this.y > this.canvasHeight) {
            this.active = false;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        if (!this.active) return;

        context.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        context.lineWidth = Math.random() * 0.5;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
        context.stroke();
    }
}