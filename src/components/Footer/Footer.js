import React from 'react';
import './Styles.css'

const Footer = () => {
    return(
        <footer className="footer container-fluid">
            <h3 className="footerHeader"> <span>©</span> Copyright {new Date().getFullYear()}</h3>
        <p>{`>About Us<`}</p>
        </footer>
    )
}
export default Footer; 