import React from 'react'

export function SecondaryButton({text, position, icon, handleClick, className}){
  return (
        <div className={`${className}`}>
            <button className="relative inline-flex overflow-hidden rounded-full" onClick={handleClick}>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,#679877_0deg,#C5CC66_360deg)]" />
                <span className="inline-flex h-full w-full transition-all ease-in-out duration-400 items-center justify-center rounded-full active:brightness-75 backdrop-blur-md text-accent">

                    <span className='bg-primary px-6 py-3 m-[2px] gap-4 rounded-full items-center inline-flex justify-center transition-all ease-in-out duration-400'>
                        {position === "left" && icon}
                        {text}
                        {position === "right" && icon}
                    </span>

                </span>
            </button>
        </div>
    )
}