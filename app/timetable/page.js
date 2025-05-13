
//React
import React from 'react'

//images

//icons

//Next Stuff
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Timetable"
};

export default function timetable() {


    return (
        <>
            <div className='flex-col items-center justify-center pt-[200px] lg:p-32 p-4'>
                <div className='relative h-[90vh] bg-primary lg:mb-8 mb-4'>
                    <Image
                        src={"/images/timetable/even.png"}
                        fill
                        // quality={100}
                        className='object-contain self-center'
                        alt={"even"}
                    />
                </div>
                <div className='relative h-[90vh] bg-primary'>
                    <Image
                        src={"/images/timetable/odd.png"}
                        fill
                        // quality={100}
                        className='object-contain'
                        alt={"odd"}
                    />
                </div>
            </div>
        </>
    )
}