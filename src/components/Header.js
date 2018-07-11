import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="header-list">
                    <li className="header-item"><Link to='/'>Home</Link></li>
                    <li className="header-item"><Link to='/aboutMe'>Bio</Link></li>
                    <li className="header-item"><Link to='/projects'>Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}
