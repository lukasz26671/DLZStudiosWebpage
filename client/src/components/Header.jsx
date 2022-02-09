import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header dark">
            <nav>
                <h2 id="logo">DLZ Studios {props?.additional}</h2>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="./contact">Contact</Link></li>
                        <li><Link to="./projects">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
