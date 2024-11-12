'use client'
import React, { useState, ChangeEvent } from 'react'

//icons
import { FaMagnifyingGlass } from "react-icons/fa6";

//Next stuff
import Link from 'next/link';
import { Search } from 'lucide-react';
import { projects } from '../lib/projects';
import ProjectThumbnail from './project-thumbnail';

export function AllProjects({}){

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [inputValue, setValue] = useState("")

  const handleChange = (event) =>{
      const inputValue = event.target.value;
      setValue(inputValue);
  }

  const handleSearch = () => {
    const searchTerm = inputValue.toLowerCase();

    const filtered = projects.filter((item) => item.title.toLowerCase().includes(searchTerm));
    setFilteredProjects(filtered);
  }

  const handleKeyPress = (event) => {
      if (event.key === "Enter") return handleSearch()
  }


  return (
    <div className="flex-col mx-16">

      <p className='text-h2 text-white100 font-bold mb-4'>All Projects</p>

      <div className='flex flex-row items-center mb-16 bg-secondary rounded-full overflow-clip'>

        <div className='px-6'>
          <FaMagnifyingGlass className='w-5 h-5 fill-white75 child-focus:outline-none child-focus:ring-1 child-focus:ring-white25 '/>
        </div>

        <input
            className="block w-full py-4 bg-secondary text-base focus:outline-none focus:ring-0 focus:ring-white25 placeholder:text-white50"
            placeholder={"Search for a project"}
            // onChange={(e) => {
            //     handleSearch(e.target.value);
            // }}
            value={inputValue ?? ""}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
        
      </div>

      <div className='grid grid-cols-4 gap-8'>
        {
            filteredProjects.map((project, index) => (
                <ProjectThumbnail key={index} project={project}/>
            ))
        }
      </div>

    </div>
  )
}
