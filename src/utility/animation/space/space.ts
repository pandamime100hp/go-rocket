import { Star } from "./src/generic/star";

const stars: Star[] = [];
const starCount = 400;

export const initialise = (canvas: HTMLCanvasElement) => {
    // Create background stars
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star(canvas.width, canvas.height));
    }
}

export const animate = (context, canvas) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
        star.draw(context, canvas);
    });

    console.log('animate')
    requestAnimationFrame(animate);
}

export default initialise