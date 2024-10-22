import { Rock } from "./generic/rock";


export class Moon extends Rock {
    angle: number; // Angle around the center
    size: number = Math.random() * 10 + 5; // A smaller size range to make it more moon-like 

    planetIndex: string; // Track which planet the moon belongs to
    moonIndex: number; // Track the moon's index

    red = Math.random() * 100 + 150;
    green = Math.random() * 100 + 150;
    blue = Math.random() * 100 + 150;
    alpha = Math.random() * 0.1 + 0.5;

    constructor(canvasWidth: number, canvasHeight: number, planetPosX: number, planetPosY: number, planetAngle: number, planetIndex: string) {
        super(canvasWidth, canvasHeight);

        this.planetIndex = planetIndex;
        this.moonIndex = Math.floor(Math.random() * 1000);
        this.angle = planetAngle;

        this.centerX = planetPosX;
        this.centerY = planetPosY;

        // Canvas width and height are used to calculate the position of the moon around a planet
        const maxRadius = Math.max(this.canvasWidth * 0.001, this.canvasHeight * 0.001) * 0.7;
        this.radius = Math.random() * maxRadius;
        this.orbitRadius = Math.random() * maxRadius * 0.5 + 20; // Added 15 to stop planets spawning over the sun
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        this.speed = Math.random() * 0.0001 + 0.0005;

        this.setPosition();
    }

    setPosition() {
        // Position already set by the planet's center (centerX, centerY), no need to calculate from the canvas width and height
        this.x = this.centerX + this.orbitRadius * Math.cos(this.angle);
        this.y = this.centerY + this.orbitRadius * Math.sin(this.angle);
    }

    update() {
        this.angle -= this.speed; // Slowly orbit around the center

        this.setPosition();
    }

    draw(context: CanvasRenderingContext2D) {
        const x = this.centerX + this.orbitRadius * Math.cos(this.angle);
        const y = this.centerY + this.orbitRadius * Math.sin(this.angle);

        // Draw the planet's base color
        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color!;
        context.fill();

        context.fillStyle = 'white';
        context.font = '12px Rubik';
        context.fillText(`Planet: ${this.planetIndex}, Moon: ${this.moonIndex}`, x + this.size + 5, y); // Label next to the moon
    }
}