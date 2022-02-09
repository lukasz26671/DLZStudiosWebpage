import React from 'react';


export default function Card(props) {
    return (
        <div className={`card ${props?.class}`}>
            <div className="info">
                <h2 className="title">{props.title ?? "Title"}</h2>
                {props.children ?? "Description"}
            </div>
            <div className="image">
                {props.img ? <img className="img" src={`${props.img}`}></img> : ""}
            </div>
        </div>
    );
}