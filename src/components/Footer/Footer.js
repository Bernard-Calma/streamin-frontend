import React from 'react';
import './Styles.css'

const Footer = props => {
    return(
        <footer className="footer container-fluid">
            <h3 className="footerHeader"> <span>©</span> Copyright {new Date().getFullYear()}</h3>
        <p onClick={() => props.modifyAppView.about()}>{`>About Us<`}</p>
        </footer>
    )
}
export default Footer; 