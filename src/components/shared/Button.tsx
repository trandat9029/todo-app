import React from 'react'

type ButtonProps = {
    buttonType?: "primary" | "secondary",
    onClick?: ()  => Promise<void>,
    children: React.ReactNode,
}

//  eslint-disable-next-line no-unused-vars
export default function Button({onClick,buttonType, children} : ButtonProps) {


  return (
    <>
        <button onClick={onClick} className={`mt-auto bg-[#473a2b] hover:bg-[#322618] h-11 w-full text-white rounded-sm cursor-pointer ${buttonType === 'secondary' ? 'opacity-85' : ''} `}>
            {/* {title} */}
            {children}
        </button>
    </>
  )
}
