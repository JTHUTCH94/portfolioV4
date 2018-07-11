import React from 'react';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import GitHub from 'react-icons/lib/fa/github-square';

export default function Contact() {
    return (
        <div className="contact">
            <p>jthutch94@gmail.com</p>
            <a className="contact-link" href="https://github.com/JTHUTCH94"><GitHub height='40px' width='40px' />   Github</a>
            <br />
            <a className="contact-link" href="https://www.linkedin.com/in/hutchinson-joshua/"><LinkedIn height='40px' width='40px' />   Linkedin</a>
        </div>
    )
}