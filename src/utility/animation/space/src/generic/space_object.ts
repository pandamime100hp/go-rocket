export interface SpaceObject{
    speed: number;
    angle: number;
    x: number;
    y: number;
    color: string;

    update(): void;
}