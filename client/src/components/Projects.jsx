import React, {useEffect} from 'react';
import Card from "./Card.jsx";
import logo from "../img/logo.jpg";
import exocraft from "../img/exocraft.jpg";
import mydb from "../img/mydb.png";

export default function Projects(props) {
    useEffect(() =>{
        const projectCards = document.querySelectorAll(".projects .card");
        projectCards.forEach(card => card.oncontextmenu = () => false);
    }, []);

    return (
        <div className="projects">
            <Card class="hero" img={logo} title="FiveInfo" link="https://github.com/lukasz26671/FiveInfo">
                Applicaton that displays info about given FiveM server

                <p>Note: GitRepo is private atm.</p>
            </Card>
            <Card class="hero" img={mydb} title="MyDB">
                A mysql / mongodb wrapper for node.js

                <p><b>IN CONSTRUCTION</b></p>
            </Card>
            <Card class="hero" img={exocraft} title="Exocraft" link="https://github.com/lukasz26671/Exocraft">
                Next-gen minecraft mod that expands your modding experience with support for many mods!
            </Card>
            <Card class="hero" img={logo} title="This webpage" link="https://github.com/lukasz26671/DLZStudiosWebpage">
                Made using React & Sass, with webpack support, allows you to see this website!
            </Card>
        </div>
    );
}