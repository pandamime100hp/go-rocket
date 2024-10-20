import { Star } from "./src/generic/star";
import Planet from "./src/planet";
import ShootingStar from "./src/shooting_star";
import { Sun } from "./src/sun";


class Space {
    stars: Star[] = [];
    starCount: number = 400;
    shootingStars: ShootingStar[] = [];
    shootingStarCount: number = 3;
    shootingStarChance: number = 0.005; // Low chance for shooting star each frame
    planets: Planet[] = [];
    planetCount: number = 10;
    
    width: number;
    height: number;
    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.width = width;
        this.height = height;

        this.initialise()
        this.animate = this.animate.bind(this);
    }

    initialise(){
        // Create background stars
        this.starCount = Math.floor((this.width * this.height) / 2500);
        for (let i = 0; i < this.starCount; i++) {
            this.stars.push(new Star(this.width, this.height));
        }

        // Create sun
        this.stars.push(new Sun(this.width, this.height));

        // Add some initial shooting stars
        for (let i = 0; i < this.shootingStarCount; i++) {
            this.shootingStars.push(new ShootingStar(this.width, this.height));
        }

        for (let i = 0; i < this.planetCount; i++) {
            this.planets.push(new Planet(this.width, this.height)); // Example planet
        }
    } 

    resize(newWidth: number, newHeight: number) {
        this.width = newWidth;
        this.height = newHeight;
        this.stars = []; // Clear existing stars
        this.planets = []; // Clear existing planets
        this.initialise(); // Recreate space
    }

    drawObject(object: any[]) {
        object.forEach((object: any) => {
            object.update();
            object.draw(this.context);
        })
    }

    animate() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.width, this.height);

        this.drawObject(this.stars);

            // Randomly add shooting stars
        if (Math.random() < this.shootingStarChance) {
            const shootingStar = new ShootingStar(this.width, this.height);
            this.shootingStars.push(shootingStar);
        }

        this.drawObject(this.shootingStars);

        // Remove shooting stars that are no longer active
        this.shootingStars = this.shootingStars.filter(star => star.active);

        this.drawObject(this.planets);

        requestAnimationFrame(this.animate);
    }
}

export default Space
