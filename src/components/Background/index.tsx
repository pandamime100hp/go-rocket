"use client"

import React, { useEffect, useRef } from 'react'

import { animate, initialise } from '../../utility/animation/space/space'

// CSS
import './index.css'

const Background: React.FC = ({...props}) => {
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        initialise(canvas)
        animate(context, canvas)
      }, [animate])

    return (
        <canvas ref={canvasRef} {...props} />
    )
}

export default Background
