"use client"

import React, { useRef, useEffect } from 'react'

// CSS
import './index.css'

// UTILITY
import { Canvas } from '../../utility/animation/canvas'
import { Space } from '../../utility/animation/space/space'

const Background: React.FC<React.CanvasHTMLAttributes<HTMLCanvasElement>> = ({...props}) => {
    const canvasRef: React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!;
        if (!canvas) return; 

        const canvasInstance: Canvas = new Canvas(canvas);
        const { width, height }: {width: number, height: number} = canvasInstance.canvasSize()
        
        let space: Space = new Space(canvasInstance.context, width, height)

        const render = () => {
            space.animate()
        }
        render()
   
        const handleResize = () => {
            canvasInstance.resizeCanvas();
            const { width, height }: {width: number, height: number} = canvasInstance.canvasSize();
            space.resize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            canvasInstance.cleanup(); // Remove event listeners
            window.removeEventListener('resize', handleResize); // Clean up resize listener
        };
    }, []);

    return (
        <canvas ref={canvasRef} {...props} /> // Render the canvas in JSX
    )
}

export default Background
