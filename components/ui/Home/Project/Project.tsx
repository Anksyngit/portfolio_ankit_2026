import React from 'react'
import {projects} from "@/data"
import SectionHeading from '../../helper/SectionHeading';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <section id="projects" className='py-16 bg-gray-100 dark:bg-gray-900'>
      <SectionHeading title_1='Featured' 
      title_2='Projects' 
      description='A Selection of my side projects'/>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
        {projects.map((project,index)=>{
            return( 
            <div key={index}>
                <ProjectCard{...project}/>
            </div>
            );
        })}
    </div>
    </section>
  )
}

export default Project;
