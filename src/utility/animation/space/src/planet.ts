import { generateRandomName } from "../../../data/randomNameGenerator";
import { Rock } from "./generic/rock";
import { Moon } from "./moon";

export class Planet extends Rock {
    angle: number = Math.random() * 2 * Math.PI; // Angle around the center
    size: number = Math.random() * 5 + 5;

    red = Math.random() * 255;
    green = Math.random() * 255;
    blue = Math.random() * 255;
    alpha = Math.random() * 0.1 + 0.5;

    planetIndex: string; // New property to track planet index

    moons: Moon[] = [];
    moonCount: number = Math.floor(Math.random() * 3) + 1;

    constructor(canvasWidth: number, canvasHeight: number) {
        super(canvasWidth, canvasHeight);

        this.planetIndex = generateRandomName();
        
        const maxRadius = Math.max(this.canvasWidth, this.canvasHeight) * 0.7;
        this.radius = Math.random() * maxRadius
        this.orbitRadius = Math.random() * maxRadius * 0.5 + 15; // Added 15 to stop planets spawning over the sun
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        this.speed = Math.random() * 0.0001 + 0.0002;
        
        this.setPosition();

        const { x, y } = this.getPosition();

        for (let i = 0; i < this.moonCount; i++) {
            this.moons.push(new Moon(this.canvasWidth, this.canvasHeight, x, y, this.angle, this.planetIndex));
        }
    }

    update() {
        this.angle += this.speed; // Slowly orbit around the center

        this.setPosition();
        const { x, y } = this.getPosition();

        this.moons.forEach((moon: Moon) => {
            moon.centerX = x;
            moon.centerY = y;
            moon.update();
        })
    }

    draw(context: CanvasRenderingContext2D) {
        const x = this.centerX + this.orbitRadius * Math.cos(this.angle);
        const y = this.centerY + this.orbitRadius * Math.sin(this.angle);

        // Draw the planet's base color
        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color!;
        context.fill();

        // Calculate light intensity based on the angle to the central star
        const lightAngle = Math.atan2(this.centerY - y, this.centerX - x);
        const angleDiff = lightAngle - this.angle;
        const lightIntensity = Math.max(0, Math.cos(angleDiff));

        // Direction of the light source
        const lightSourceX = x + (this.size / 1.5) * Math.cos(lightAngle)
        const lightSourceY = y + (this.size / 1.5) * Math.sin(lightAngle)

        // Draw a subtle light effect on the crescent side
        const gradient = context.createRadialGradient(lightSourceX, lightSourceY, 0, x, y, this.size);
        gradient.addColorStop(1, `rgba(0, 0, 0, 1)`); // Shadow side
        gradient.addColorStop(0, `rgba(255, 255, 255, ${lightIntensity * 0.5})`); // Light facing the star
        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();

        context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(x - 2, y + 2);
        context.lineTo(x - 22, y + 22);
        context.stroke();

        // Draw the label for the planet
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        context.font = '12px Rubik';
        context.textAlign = 'right';
        context.fillText(`Planet: ${this.planetIndex}`, x - 27, y + 27); // Label next to the planet


        // // Draw the moons
        // this.moons.forEach(moon => {
        //     moon.draw(context);
        // });
    }
}
