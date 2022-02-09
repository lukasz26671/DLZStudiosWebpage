import React from 'react';

export default function Footer(props) {
    return (
        <div className="footer dark">
            <div className="content">
                <div className="copyright">
                    <h2>DLZ Studios Official Website</h2>
                    <p>
                        Made with <i className="fab fa-react"></i> & <i className="fab fa-sass"></i>
                        <br/>
                        <span>&copy; DLZ Studios {new Date().getFullYear()}</span>
                    </p>
                </div>
                <div className="info">
                    <div className="left">
                        <h2>Socials</h2>
                        <ul>
                            <li className="github"><a href="https://github.com/lukasz26671" rel="noopener" target="_blank">Lukasz26671</a></li>
                            <li className="github"><a href="https://github.com/ItQerk" rel="noopener" target="_blank">ItQerk</a></li>
                            <li className="youtube"><a href="https://www.youtube.com/channel/UClz5fx5m9YXl830X4OzF7bA" rel="noopener" target="_blank">YouTube</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <h2>Contact</h2>
                        <ul>
                            <li className="mail"><a href="mailto:dlzstudios.contact@gmail.com">dlzstudios.contact(at)gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );   
}