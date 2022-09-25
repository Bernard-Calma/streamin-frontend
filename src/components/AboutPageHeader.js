import React, {Component} from 'react'

class AboutPageHeader extends Component  {
    // constructor(props) {
    //     super(props)
    // }
    render(){
        return(  
       <div className="header container-fluid">
            <nav className="navbar">
                {/* Menu Icon that will show at a specific media query */}
                <div className="menu-icon">
                    {/* Will add an icon */}
                </div>
                
                <ul className="nav-menu">
                <div id="navLogo">
                <a className="homepageLink" href="#">
                    {/* Add image or App title  */}
                    Streamin
                </a>
                </div>
                    <li className="nav-item">
                        <a id="nav-link" className="nav-link" href="#"> 
                        Sign Up/Login
                        </a>
                    </li>
                </ul>
            </nav>
       </div>
    );
    }
}

export default AboutPageHeader