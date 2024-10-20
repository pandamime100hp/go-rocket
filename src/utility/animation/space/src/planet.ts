import { SpaceObject } from "./generic/space_object";

export default class Planet implements SpaceObject {
    radius: number; // Distance from the center
    orbitRadius: number; // Radius of the orbit
    angle: number = Math.random() * 2 * Math.PI; // Angle around the center
    size: number = Math.random() * 5 + 1;
    color: string;
    speed: number;
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
    centerX: number;
    centerY: number;

    red = Math.random() * 255;
    green = Math.random() * 255;
    blue = Math.random() * 255;
    alpha = Math.random() * 0.1 + 0.5;
    // craters: Array<{ x: number; y: number; size: number }>;
    // waterBodies: Array<{ x: number; y: number; size: number }>;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.centerX = this.canvasWidth / 2;
        this.centerY = this.canvasHeight / 2;
        
        const maxRadius = Math.max(this.canvasWidth, this.canvasHeight) * 0.7;
        this.radius = Math.random() * maxRadius
        this.orbitRadius = Math.random() * maxRadius * 0.5 + 15; // Added 15 to stop planets spawning over the sun
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;

        this.getPosition();
    }
    
    getPosition(): void {
        this.x = this.centerX + this.radius * Math.cos(this.angle);
        this.y = this.centerY + this.radius * Math.sin(this.angle);
    }

    // createCraters(): Array<{ x: number; y: number; size: number }> {
    //     const craters: Array<{ x: number; y: number; size: number }> = [];
    //     const craterCount = Math.floor(Math.random() * 4) + 2; // 2-5 craters

    //     for (let i = 0; i < craterCount; i++) {
    //         const size = Math.random() * 3 + 2; // Random size for craters
    //         const x = Math.random() * this.size - this.size / 2; // Random position within the planet
    //         const y = Math.random() * this.size - this.size / 2; // Random position within the planet
    //         craters.push({ x, y, size });
    //     }
    //     return craters;
    // }

    // createWaterBodies(): Array<{ x: number; y: number; size: number }> {
    //     const waterBodies: Array<{ x: number; y: number; size: number }> = [];
    //     const waterCount = Math.floor(Math.random() * 2) + 1; // 1-2 bodies of water

    //     for (let i = 0; i < waterCount; i++) {
    //         const size = Math.random() * 6 + 4; // Random size for water bodies
    //         const x = Math.random() * this.size - this.size / 2; // Random position within the planet
    //         const y = Math.random() * this.size - this.size / 2; // Random position within the planet
    //         waterBodies.push({ x, y, size });
    //     }
    //     return waterBodies;
    // }

    update() {
        this.angle += 0.001; // Slowly orbit around the center
    }

    draw(context: CanvasRenderingContext2D) {
        const x = this.centerX + this.orbitRadius * Math.cos(this.angle);
        const y = this.centerY + this.orbitRadius * Math.sin(this.angle);

        // Calculate light intensity based on the angle to the central star
        const lightAngle = Math.atan2(this.centerY - y, this.centerX - x);
        const angleDiff = lightAngle - this.angle;
        const lightIntensity = Math.max(0, Math.cos(angleDiff));

        // Draw the planet's base color
        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();

        // Create crescent effect using a shadow mask
        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        context.globalCompositeOperation = 'destination-out'; // Cut out the crescent shape
        context.fill();

        // Restore the default composite operation
        context.globalCompositeOperation = 'source-over';

        // Draw a subtle light effect on the crescent side
        const gradient = context.createRadialGradient(x - (this.size / 1.5) * Math.cos(lightAngle), y - (this.size / 1.5) * Math.sin(lightAngle), 0, x, y, this.size);
        gradient.addColorStop(1, `rgba(0, 0, 0, 1)`); // Shadow side
        gradient.addColorStop(0, `rgba(255, 255, 255, ${lightIntensity * 0.5})`); // Light facing the star
        context.beginPath();
        context.arc(x, y, this.size, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();

        // 

        // // Calculate light direction and the angle for the crescent effect
        // const lightAngle = Math.atan2(centerY - y, centerX - x);
        // const angleDiff = lightAngle - this.angle;
        
        // // Draw the planet's base color
        // ctx.beginPath();
        // ctx.arc(x, y, this.size, 0, Math.PI * 2);
        // ctx.fillStyle = this.color;
        // ctx.fill();

        // // Create crescent effect using a shadow mask
        // ctx.beginPath();
        // const crescentSize = this.size * 1.1; // Crescent size slightly larger than the planet
        // ctx.arc(x, y, crescentSize, 0, Math.PI * 2);
        // ctx.globalCompositeOperation = 'destination-out'; // Cut out the crescent shape
        // ctx.fill();

        // // Restore the default composite operation
        // ctx.globalCompositeOperation = 'source-over';

        // // Draw a subtle light effect on the crescent side
        // const gradient = ctx.createRadialGradient(x - (this.size / 1.5) * Math.cos(lightAngle + Math.PI), y - (this.size / 1.5) * Math.sin(lightAngle + Math.PI), 0, x, y, this.size);
        // gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0, Math.cos(angleDiff)) * 0.5})`); // Light facing the star
        // gradient.addColorStop(1, this.color); // Shadow side
        // ctx.beginPath();
        // ctx.arc(x, y, this.size, 0, Math.PI * 2);
        // ctx.fillStyle = gradient;
        // ctx.fill();

        // // Draw craters
        // this.craters.forEach(crater => {
        //     ctx.beginPath();
        //     ctx.arc(x + crater.x, y + crater.y, crater.size, 0, Math.PI * 2);
        //     ctx.fillStyle = 'rgba(100, 100, 100, 0.9)'; // Dark gray for craters
        //     ctx.fill();
        // });

        // // Draw water bodies
        // this.waterBodies.forEach(water => {
        //     ctx.beginPath();
        //     ctx.arc(x + water.x, y + water.y, water.size, 0, Math.PI * 2);
        //     ctx.fillStyle = 'rgba(0, 0, 255, 0.6)'; // Blue for water
        //     ctx.fill();
        // });
    }
}