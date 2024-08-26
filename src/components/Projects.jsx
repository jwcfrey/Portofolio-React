import React, { memo } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { PROJECTS } from "../constants";

const ProjectCard = memo(({ project }) => (
    <div key={project.id} className="group relative overflow-hidden rounded-3xl">
        <img 
            src={project.image} 
            alt={project.name} 
            className="h-[30rem] max-w-[35rem] object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="mb-2 text-xl">{project.name}</h3>
            <p className="mb-12 p-5 text-center">{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="font-semibold rounded-full bg-white px-4 py-2 text-black hover:bg-[#8c4df7] project__a">
                <div className="flex items-center">
                    <span className='px-1'>View on Github</span>
                    <MdArrowOutward />
                </div>
            </a>
        </div>
    </div>
));

const Projects = () => {
    return (
        <section className="pb-1" id="projects">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl font-extrabold">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 font-semibold">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
