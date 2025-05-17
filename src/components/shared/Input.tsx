import React from 'react'

interface InputProps {
    title: string,
    className?: string,
}

export default function Input({title, className = ""} : InputProps) {
    return (
        <>
            <input type="text" className={`${className}`} placeholder={title} />
        </>
    )
}
