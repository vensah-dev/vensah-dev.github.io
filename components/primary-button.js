import React from 'react'

export function PrimaryButton({text, position, icon, handleClick, className}){
  return (
        <div className={`${className}`}>
            <button className="relative inline-flex overflow-hidden rounded-full" onClick={handleClick}>
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,#679877_0deg,#C5CC66_360deg)]" />
                <span className="inline-flex h-full w-full transition-all ease-in-out duration-400 items-center justify-center rounded-full px-6 hover:px-8 active:px-6 active:brightness-75 py-3 gap-4 text-base font-ubuntu font-normal backdrop-blur-xl text-primary">
                    {position === "left" && icon}
                    {text}
                    {position === "right" && icon}
                </span>
            </button>
        </div>
    )
}