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
            <div className="content">
                <h3>DLZ</h3>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel sapiente hic non voluptate, illum magnam velit illo adipisci, laboriosam nulla ratione nemo suscipit facere harum sint quam quidem? Libero aperiam voluptate quis perspiciatis voluptatum nesciunt neque iure? Reiciendis unde quidem in neque delectus odio earum porro mollitia culpa! Explicabo, magnam eligendi ullam dolor sint consectetur omnis molestiae necessitatibus pariatur error! Quaerat saepe nostrum sapiente aliquid assumenda quos fugit, dolores, ad ducimus, illum fuga quia voluptatibus ea iure excepturi? Minus quam maiores illo id tenetur inventore impedit, eligendi commodi autem maxime voluptatum exercitationem quod natus ducimus sapiente in ea a adipisci error dolore sequi consequatur! Quod aut fuga itaque adipisci beatae accusantium mollitia praesentium omnis ad pariatur sint, provident debitis qui ipsa doloribus tempora harum ab rem dolore a officiis illo autem reiciendis. Ullam, deserunt! Rerum, odit. Incidunt soluta saepe vero nam ratione cumque magnam delectus assumenda cum! Eius, hic suscipit vel magnam odio rem quisquam possimus animi aperiam impedit magni similique placeat quia et mollitia voluptatum voluptates, excepturi ullam ad provident voluptas blanditiis dolorem id? Numquam doloribus ullam officiis quia ratione? Doloribus soluta rerum, possimus et dolorem laborum eos blanditiis labore, sapiente aspernatur modi animi ipsum numquam eius amet, temporibus ratione. Reprehenderit, architecto culpa reiciendis harum cumque saepe totam excepturi nesciunt perspiciatis vel itaque eveniet aperiam impedit, inventore voluptatum consectetur dolorum quia alias iste sint sunt ipsam modi? Aperiam delectus facere, autem doloribus quia laboriosam possimus provident ea rem corporis laborum est ipsum ipsam quae natus explicabo tempora magni illum accusantium perferendis molestiae eum at nihil. Nulla, sed? Debitis doloremque neque sint autem totam a molestiae sequi reprehenderit possimus perspiciatis. Aliquam exercitationem incidunt nobis laborum repellat, a, voluptatum animi porro numquam autem suscipit pariatur quis vel nam eaque placeat eos aspernatur cum libero facere totam possimus quasi ducimus. Quibusdam est reprehenderit nihil necessitatibus beatae aliquid nisi, omnis officiis, error deserunt similique amet consectetur temporibus cumque. Repellendus accusantium sit fuga, enim doloribus laboriosam officiis tenetur ea. Ipsam dolore eum doloremque dignissimos ducimus consequatur provident vel beatae voluptatum praesentium qui accusantium nihil officia blanditiis rerum asperiores, porro consectetur modi ipsa itaque iste eligendi. Dignissimos tempora esse, eius aperiam autem maxime optio aut neque dolor? Iste reprehenderit quibusdam suscipit provident at. Ipsum quisquam qui sapiente veritatis sunt consequatur quam aut? Quam sint ex, est fuga quas dicta doloremque dolor facere ipsam, officia recusandae, debitis iste praesentium doloribus. Velit, porro ipsa consectetur voluptatem earum aperiam sunt eaque dolorum quasi aliquam tempora sed exercitationem vitae, modi omnis in impedit asperiores molestias eveniet ullam. Dicta aliquid optio vel, labore fuga magni ratione sed inventore quas tempore, officiis magnam odit praesentium adipisci amet. Repellat quia neque eum, sit facere consectetur eos itaque dolor quisquam ratione nemo porro omnis optio numquam magni nam laborum. Nisi aliquid quasi minima dolor voluptate, at nobis nihil ipsum, maxime vel, fugiat eligendi. Voluptatem, impedit officiis, quibusdam deserunt ea et unde dolorum quas reiciendis expedita perferendis velit. Tenetur repellat at sit dolore eius quod a adipisci dolores necessitatibus! Fuga quae laudantium sequi.</div>
            </div>
            
        </div>

    );
}