import { SpaceObject } from "./space_object";

export class Rock implements SpaceObject {
    speed: number;
    angle: number;
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
    centerX: number;
    centerY: number;
    radius: number; // Distance from the center
    orbitRadius: number; // Radius of the orbit
    color?: string | undefined;
    size?: number | undefined;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.centerX = this.canvasWidth / 2;
        this.centerY = this.canvasHeight / 2;
        this.radius = Math.random() * Math.max(canvasWidth, canvasHeight) * 0.5 + 30;
    }
    
    setPosition(): void {
        this.x = this.centerX + this.radius * Math.cos(this.angle);
        this.y = this.centerY + this.radius * Math.sin(this.angle);
    }

    getPosition(): { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

    update(): void {
        throw new Error("Method not implemented.");
    }

    draw(context: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}