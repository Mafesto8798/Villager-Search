import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-container">
            <div className="clouds-container">
            <img className="cloud1" src="Cloud.png" alt="cloud"/>
            <img className="little1" src="Cloud.png" alt="cloud"/>
            <img className="cloud2" src="Cloud.png" alt="cloud"/>
            <img className="little2" src="Cloud.png" alt="cloud"/>
            <img className="cloud3" src="Cloud.png" alt="cloud"/>
            <img className="little3" src="Cloud.png" alt="cloud"/>
            </div>
            <nav>
                <Link className="nav-links" to="/home">
                <h1>Home</h1>
                </Link>
                <Link className="nav-links" to="/contact">
                <h1>Contact</h1>
                </Link>
            </nav>
        </div>
    )
}
