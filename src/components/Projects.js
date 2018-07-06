import React from 'react';

export default function Projects(props) {
    return (
        <div className="project-list">
            <h1>My Projects</h1>
            <ul>
            <li className="project">
                    <a className="project-title" href="https://schedulr.netlify.com/">Schedulr</a>
                    <p>Schedulr is a quick and easy way to schedule and manage appointments for small business owners and business professionals alike. With both a web based application and a mobile application, users are able to keep track of their appointments with the added benefit of an automated notification system to keep clients in the loop.</p>
                    <a href="https://github.com/thinkful-ei19/Final-CS-ctrl-alt-elite-client">GitHub Client</a>
                    <br />
                    <a href="https://github.com/thinkful-ei19/Final-CS-ctrl-alt-elite-server">GitHub Server</a>
                </li>
                <li className="project">
                <a className="project-title" href="https://learn-dothraki.netlify.com/"> Learn Dothraki</a>
                    <p>Learn Dothraki is a spaced repetition application made for the sole purpose of learning the fictional language Dothraki from the popular HBO television series Game of Thrones. The application was built using React, Redux, Javascript, Express, and Node.</p>
                    <a href="https://github.com/thinkful-ei19/Josh-Ray-Spaced-Repitition-App-Client">GitHub Client</a>
                    <br />
                    <a href="https://github.com/thinkful-ei19/Josh-Ray-Spaced-Repetition-App-Server">GitHub Server</a>
                </li>
                <li className="project">
                    <a className="project-title" href="https://rpg-character-builder.netlify.com/"> RPG Character Builder</a>
                    <p>The RPG Character Builder is a full stack web application designed to allow users to choose from a preset list of options in order to create custom characters. The application is built using React.js, Redux, Express, Node, and Javascript.</p>
                    <a href="https://github.com/JTHUTCH94/Character-Builder-Client">GitHub</a>
                </li>
            </ul>
        </div>
    )
}