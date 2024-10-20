import Canvas from "../animation/canvas"
import Space from "../animation/space/space"


const canvasElement: HTMLCanvasElement = document.getElementById('space') as HTMLCanvasElement

console.log(canvasElement)

const canvas = new Canvas(canvasElement)
const { width, height } = canvas.canvasSize()
const space = new Space(canvas.context, width, height)

console.log("script executed")

space.initialise()
space.animate()