import React from 'react';

export default function Header(props) {
    return (
        <div className="header dark">
            <nav>
                <h2 id="logo">DLZ Studios {props?.additional}</h2>
                <div className="nav-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="./contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
