import React, {useEffect, useState} from 'react';
import banner from "../../img/banner.webp";
import {isMobile} from 'react-device-detect';
export default function Home(props) {

    const [width, setWidth] = useState(0);
    useEffect(() =>{

        const updateWindowDimensions = () => {
            const newHeight = window.innerHeight;
            setHeight(newHeight);
            console.log("updating height");
        };

        function convertRemToPixels(rem) {    
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        };
        
    
        const img = document.querySelector(".bg-img");
        const imgOffsetLeft = ()=> img.offsetLeft;
        const setImagePosition = () => {
            const currentOffset = imgOffsetLeft();
            const current = img.getBoundingClientRect();
            let cx = current.left + img.width * 0.5;
            let cy = current.top + img.height * 0.5;
            // const current = [img.width, img.height]
            // let cx = 0 + current[0] * 0.5;
            // let cy = 0 + current[1] * 0.5;
            let viewportWidth = window.innerWidth;
            const displacement = Math.ceil(-(cx - (viewportWidth/2)) + currentOffset);
            console.log(displacement);
            img.style.setProperty("left", `${displacement}px`)
        }
        // }
        setImagePosition();
        if(isMobile) {setTimeout(()=> {setImagePosition();}, 150);}

        window.addEventListener("resize", setImagePosition);
        window.addEventListener("orientationchange", setImagePosition);

    }, []);

    return (
        <div className="content-wrapper">
            <div className="landing">
                <div className="opener slide-rotate-ver-right">
                    <h2 className="title">DLZ Studios</h2>
                    <p className="subtitle">Happy to welcome you on our official website.</p>
                </div>
                <img className="bg-img" src={banner} alt="" />
            </div>
        </div>
    );
}