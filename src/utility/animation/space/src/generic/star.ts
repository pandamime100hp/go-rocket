import { SpaceObject } from "./space_object";

export class Star implements SpaceObject {
    radius: number;
    angle: number;
    size: number;
    speed: number;
    color: string;
    isTwinkling: boolean;
    twinkleOpacity: number;
    twinkleSpeed: number;
    x: number;
    y: number;
    starOpacity: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        this.x = centerX + this.radius * Math.cos(this.angle);
        this.y = centerY + this.radius * Math.sin(this.angle);
        this.radius = Math.random() * Math.max(centerX, centerY) * 0.5
        this.angle = Math.random() * 2 * Math.PI;
        this.size = Math.random() * 1;
        this.speed = Math.random() * 0.0005 + 0.0001;
        this.isTwinkling = Math.random() < 0.3;
        this.twinkleOpacity = 1;
        this.twinkleSpeed = Math.random() * 0.0002 + 0.0005;
        this.starOpacity = this.isTwinkling ? this.twinkleOpacity : 1;
        this.color = 'rgba(255, 255, 255, 0.8)';
    }

    update(): void {
        this.angle += this.speed;

        if (this.isTwinkling) {
            this.twinkleOpacity = 0.5 + Math.sin(Date.now() * this.twinkleSpeed) * 0.5;
        }
    }

    draw(context, canvas): void {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const x = centerX + this.radius * Math.cos(this.angle);
        const y = centerY + this.radius * Math.sin(this.angle);

        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        const starOpacity = this.isTwinkling ? this.twinkleOpacity : 1;
        context.fillStyle = `rgba(255, 255, 255, ${starOpacity})`;
        context.fill();
    }
}