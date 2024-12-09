'use client';
//React
import React, { useState, useEffect } from 'react';

//Next JS stuff
import Image from "next/image";

//icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function FullCardCarousel({ content }) {
    const [index, setIndex] = useState(0);

    const showButtons = content.length > 1 ? true : false;

    return (
        <>

            <div className="relative w-full border-white10 border-2 rounded-[1rem]">
                <div className="font-medium flex-grow-0 bg-opacity-0 rounded-[1rem] overflow-clip align-text-top  md:aspect-[16/8] aspect-[3/4]">
                    <div className={`flex justify-center w-full self-center bg-tertiary`}>

                        <div className='relative w-full md:aspect-[16/8] aspect-[3/4]'>
                            <Image
                                src={content[index].image}
                                fill
                                priority
                                className='object-cover'
                                alt="supporting image"
                            />
                        </div>

                        <div className={`absolute bottom-0 flex md:gap-8 gap-6 md:m-4 m-2 bg-primary p-[3px] backdrop-blur-3xl rounded-full opacity-70 ${showButtons === true ? 'flex' : 'hidden'}`}>

                            <button className={`flex items-center justify-center w-8 h-8 rounded-full bg-white15 backdrop-blur-3xl ${index === 0 ? 'opacity-50' : 'md:hover:opacity-75'}`} onClick={() => { if (index > 0) { setIndex(index - 1) } }}>
                                <FaArrowLeft className='w-6 h-6 fill-white75' />
                            </button>

                            <button className={`flex items-center justify-center w-8 h-8 rounded-full bg-white15 backdrop-blur-3xl ${index === content.length - 1 ? 'opacity-50' : 'md:hover:opacity-75'}`} onClick={() => { if (index < content.length - 1) { setIndex(index + 1) } }}>
                                <FaArrowRight className='w-6 h-6 fill-white75' />
                            </button>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}