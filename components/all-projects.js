'use client'
import React, { useState, useEffect } from 'react'

//icons\
import { IoClose } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

//Next stuff
import Link from 'next/link';
import { projects } from '../lib/projects';
import ProjectThumbnail from './project-thumbnail';

export function AllProjects({ }) {
  const projectsAlphebetical = JSON.parse(JSON.stringify(projects)).sort((a, b) => a.title.localeCompare(b.title))

  const [filteredProjects, setFilteredProjects] = useState(projectsAlphebetical);
  const [inputValue, setInputValue] = useState("")

  const handleSearch = () => {
    const searchTerm = inputValue.toLowerCase();

    const filtered = projectsAlphebetical.filter((item) => item.title.toLowerCase().includes(searchTerm));
    setFilteredProjects(filtered);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    console.log(value);
  }

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") return handleSearch()
  }

  return (
    <div className="flex-col md:mx-16 mx-4">

      <p className='md:text-h2 text-h3 text-white100 font-bold mb-4'>All Projects</p>

      <div className='flex flex-row items-center mb-16 bg-secondary rounded-full overflow-clip'>

        <div className='px-6'>
          <FaMagnifyingGlass className='w-5 h-5 fill-white75' />
        </div>

        <input
          className="block w-full py-4 bg-secondary text-base focus:outline-none focus:ring-0 focus:ring-white25 placeholder:text-white50"
          placeholder={"Search for a project"}
          value={inputValue ?? ""}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />

        <div className='px-6'>
          <IoClose className={`w-5 h-5 fill-white75 ${inputValue == "" ? 'hidden' : ''}`} onClick={() => { setInputValue("") }} />
        </div>

      </div>

      <div className='grid lg:grid-cols-4 grid-cols-1 gap-8'>
        {
          filteredProjects.map((project, index) => (
            <ProjectThumbnail key={index} project={project} />
          ))
        }
      </div>

    </div>
  )
}
