import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <h1 className="title">Joshua Hutchinson</h1>
            <h2>Junior Web Developer</h2>
            <p>Tech Enthusiast, Avid Gamer, Big Time Nerd</p>
            <img
                className="computer" src="https://s8.postimg.cc/xesezd1c5/Computer.png" />
            <Contact />
        </div>
    )
}