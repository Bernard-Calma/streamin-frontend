import React, {Component} from 'react'
// Import the ICONIMAGE
// import logoImage from '../Logo2.png'

// // Import Sign Form
// import SignInForm from './SignIn'
class Header extends Component  {
    render(){
        return(
            <div>
                <div className="header container-fluid ">
                    <nav className="navbar2">
                        {/* Menu Icon that will show at a specific media query */}
                        <div className="menu-icon">
                            {/* Will add an icon */}
                        </div>
                        <div id="navLogo">
                            {/* <img src={logoImage} alt="image"/> */}
                            <p className="homepageLink"
                                onClick={this.props.handleLogo}    
                            >
                                {/* Add image or App title  */}
                                Streamin
                            </p> 
                            </div>
                        <ul className="nav-menu">
                            
                            <li className="nav-item">
                                {this.props.isShowingAbout === true
                                    ?<p
                                        id="nav-link"
                                        className="nav-link"
                                        onClick={this.props.showAbout}
                                    >
                                        Back to Sign In
                                    </p>
                                    :<p
                                        id="nav-link"
                                        className="nav-link about"
                                        onClick={this.props.showAbout}
                                    >
                                        About
                                    </p>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header