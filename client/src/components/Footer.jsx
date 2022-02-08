import React from 'react';

export default function Footer(props) {
    return (
        <div className="footer dark">
            <div className="content">
                <div className="left">
                    <h3>Socials</h3>
                    <ul>
                        <li className="facebook"><a href="https://www.facebook.com/DLZStudios/">Facebook</a></li>
                        <li className="instagram"><a href="https://www.instagram.com/dlzstudios/">Instagram</a></li>
                        <li className="youtube"><a href="https://www.youtube.com/channel/UC-_X-_X-_X-_X-_X-_X-">YouTube</a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>&copy; DLZ Studios {new Date().getFullYear()}</p>
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <p>
                        <a className="mail" href="mailto:dlzstudios.contact@gmail.com">dlzstudios.contact(at)gmail.com</a>
                    </p>
                </div>
                
            </div>
        </div>
    );   
}