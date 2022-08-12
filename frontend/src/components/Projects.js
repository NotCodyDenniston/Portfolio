import React from "react";
import nasa from './images/NASA-WEBSITE.png'
import grid from './images/GRID.png'
import quiz from './images/Redux-quiz.png'
import instagram from './images/instagram-clone.png'

import Project from "./Project";


export default function Projects(){

    const projectData = [
        {
            'id':4,
            "img": instagram,
            "description": "A basic instagram clone made with React.js for the purpose of learning prop drilling and data mapping",
            "url": 'https://github.com/NotCodyDenniston/React-Components-Insta-Clone'
        },
        {
            'id':1,
            "img": nasa,
            "description": "A simple but cool website made with the NASA API that gives you a a different 'photo of the day' along with a description",
            "url": 'https://github.com/NotCodyDenniston/nasa-photo-of-the-day'
        },
        {
            'id':2,
            "img": grid,
            "description": "A grid functional grid that tracks your movements. both as a class component and a functional component. This was one of the weekly tests we have at Bloomtech that I usually complete in 2-6 hours.",
            "url": 'https://github.com/NotCodyDenniston/web-sprint-challenge-advanced-react'
        },
        {
            'id':3,
            "img": quiz,
            "description": "An basic quiz application for practicing redux and advanced state management. ",
            "url": 'https://github.com/NotCodyDenniston/web-sprint-challenge-advanced-state'
        }
    ]

    const backendProjectData = [
        {
            'id':1,
            "img": nasa,
            "description": "A simple but cool website made with the NASA API that gives you a a different 'photo of the day' along with a description",
            "url": 'https://github.com/NotCodyDenniston/nasa-photo-of-the-day'
        },

    ]
    return(
        <div>
        <h1>Hello! These are my projects</h1>
        <h4>Frontend</h4>
        <div className="project-container">

       { projectData.map(project => (
           <Project project={project} key={project.id}/>
           

        ))}
        <h4>Backend</h4>
        </div>
          </div>
    )
}