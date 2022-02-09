import React from 'react';
import Card from "./Card.jsx";
import logo from "../img/logo.jpg";

export default function Projects(props) {
    return (
        <div className="projects">
            <Card class="hero" img={logo} title="FiveInfo">
                Applicaton that displays info about given FiveM server
            </Card>
            <Card class="hero" img={logo} title="MyDB">
                A mysql / mongodb wrapper for node.js

                <p><b>IN CONSTRUCTION</b></p>
            </Card>
            <Card class="hero" img={logo} title="Exocraft">
                Next-gen minecraft mod that expands your modding experience with support for many mods!
            </Card>
            <Card class="hero" img={logo} title="Exocraft">
                Next-gen minecraft mod that expands your modding experience with support for many mods!
            </Card>
        </div>
    );
}