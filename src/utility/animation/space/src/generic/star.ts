import { SpaceObject } from "./space_object";

export class Star implements SpaceObject {
    radius: number;
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
    centerX: number;
    centerY: number;

    angle: number = Math.random() * 2 * Math.PI;
    size: number = Math.random() * 1;
    speed: number = Math.random() * 0.0005 + 0.0001;
    color: string = 'rgba(255, 255, 255, 0.8)';
    isTwinkling: boolean = Math.random() < 0.3;
    twinkleOpacity: number = 1;
    twinkleSpeed: number = Math.random() * 0.0002 + 0.0005;
    starOpacity: number = this.isTwinkling ? this.twinkleOpacity : 1;


    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.radius = Math.random() * Math.max(canvasWidth, canvasHeight) * 0.5 + 30;
        this.centerX = this.canvasWidth / 2;
        this.centerY = this.canvasHeight / 2;

        this.getPosition();
    }

    getPosition(): void {
        this.x = this.centerX + this.radius * Math.cos(this.angle);
        this.y = this.centerY + this.radius * Math.sin(this.angle);
    }

    update(): void {
        this.angle += this.speed;

        this.getPosition();

        if (this.isTwinkling) {
            this.twinkleOpacity = 0.5 + Math.sin(Date.now() * this.twinkleSpeed) * 0.5;
        }
    }

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const starOpacity = this.isTwinkling ? this.twinkleOpacity : 1;
        context.fillStyle = `rgba(255, 255, 255, ${starOpacity})`;
        context.fill();
    }
}