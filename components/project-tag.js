'use client'

//React
import React from 'react'


export default function Tags({ project }) {


    return (
        <>
            {
                project.tags.map((tag, index) => (

                    <div key={index} className={`px-4 xl:py-1 py-0 rounded-full bg-opacity-50`} style={{ backgroundColor: tag.color }}>
                        <p className='whitespace-nowrap'>{tag.title}</p>
                    </div>
                ))
            }
        </>

    )
}