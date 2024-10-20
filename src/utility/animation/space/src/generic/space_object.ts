export interface SpaceObject{
    speed: number;
    angle: number;
    x: number;
    y: number;
    color?: string;
    size?: number;

    update(): void;
    draw(context: CanvasRenderingContext2D): void;
}