import React from 'react'

export function PrimaryButton({text, position, icon}){
  return (
        <button className="relative inline-flex overflow-hidden rounded-full">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#679877_0deg,#AAB979_180deg,#B9C145_360deg)]" />
            <span className="inline-flex h-full w-full cursor-default transition-all ease-in-out duration-400 items-center justify-center rounded-full px-4 hover:px-5 py-3 gap-4 hover:gap-5 text-base font-ubuntu font-normal text-primary backdrop-blur-2xl">
                {position === "left" && icon}
                {text}
                {position === "right" && icon}
            </span>
        </button>
    )
}