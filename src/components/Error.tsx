// REACT
import React from 'react'

type ErrorProps = {
    error: Error
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <p>{error.message}</p>
    )
}

export default Error
