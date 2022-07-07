import React from "react";
import html5 from './images/html-5.png'
import react from './images/atom.png'
import node from './images/nodejs.png'
import javascript from './images/js.png'
import git from './images/github.png'
import sqlite from './images/server.png'
import sql from './images/sql.png'
import css from './images/css-3.png'

export default function About() {
return(<div>
    <h4>About me</h4>
    <section className="about-content-container">
    <div className="about-content">
        <h3>Hello!</h3>
        <p>&emsp;My name is Cody Denniston and I am a passionate Full Stack Web Developer learning web technologies to build amazing products and kick off my professional career in tech. I enjoy applying my mind to solve technical tasks and create amazing products.</p>
        <p>&emsp;I would love to hear from you. Whether its a job opportunity, or just to chat and ask questions. Feel free to contact me!</p>
    </div>
    <div className="about-skills">
        <h3>Skills</h3>
        <section className="skills-boxes" >
           <div className="box">
            <h6>HTML</h6>
            <img src={html5} alt="....."/>
           </div>
           <div className="box">
            <h6>CSS</h6>
            <img src={css} alt="....."/>
           </div>
           <div className="box">
            <h6>Javascript</h6>
            <img src={javascript} alt="....."/>
           </div>
           <div className="box">
            <h6>React.js</h6>
            <img src={react} alt="....."/>
           </div>
           <div className="box">
            <h6>Node.js</h6>
            <img src={node} alt="....."/>
           </div>
           <div className="box">
            <h6>SQL</h6>
            <img src={sql} alt="....."/>
           </div>
           <div className="box">
            <h6>Git</h6>
            <img src={git} alt="....."/>
           </div>
           <div className="box">
            <h6>SQLite Studio</h6>
            <img src={sqlite} alt="....."/>
           </div>
        </section>
    </div>
    <section className="about-school">
        <h3>Schooling</h3>

        <p>     &emsp;I am currently in the last few months of a full stack web dev course at Bloomtech university, and it's been challenging but very exciting! I've done daily web projects and weekly tests on everything from HTML/CSS and javascript basics in the 1st unit,  react, redux, to learning backend via Node.js, express, SQL, database management and building api's later units. <br/> </p>
        <p> &emsp; I'm excited to start the transition from schooling and self study to having a paid outlet for my programming skills! </p>
    </section>
    </section>
    <footer> </footer>
</div>)
}