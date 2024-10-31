import React from 'react'

export function PrimaryButton({text, position, icon, handleClick, className}){
  return (
        <div className={`${className}`}>
            <button className="relative inline-flex overflow-hidden rounded-full" onClick={handleClick}>
                <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,#679877_0deg,#C5CC66_360deg)]" />
                <span className="inline-flex h-full w-full cursor-default transition-all ease-in-out duration-400 items-center justify-center rounded-full px-6 hover:px-8 active:px-6 active:brightness-125 py-3 gap-4 text-base font-ubuntu font-normal backdrop-blur-2xl text-primary">
                    {position === "left" && icon}
                    {text}
                    {position === "right" && icon}
                </span>
            </button>
        </div>
    )
}