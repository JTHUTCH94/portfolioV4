import React from 'react';

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <img
                width='100px'
                height='100px'
                className="profile-pic"
                src="https://s15.postimg.cc/gckdcwkaz/profile-pic.jpg"
            />
            <h1 className="title">Joshua Hutchinson</h1>
            <h2>Junior Web Developer</h2>
            <p>Full Stack Developer, Avid Gamer, Big Time Nerd</p>
            <img 
        className="computer" src="https://s8.postimg.cc/xesezd1c5/Computer.png"/>
            <br />
            <p>jthutch94@gmail.com</p>
            <a href="https://github.com/JTHUTCH94">Github</a>
            <br />
            <a href="https://www.linkedin.com/in/hutchinson-joshua/">LinkedIn</a>
        </div>
    )
}