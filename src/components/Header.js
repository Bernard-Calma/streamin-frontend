import React, {Component} from 'react'
// Import the Font Awesome bar that will change

// // Import Sign Form
// import SignInForm from './SignIn'
class Header extends Component  {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <div className="header container-fluid ">
                    <nav className="navbar">
                        {/* Menu Icon that will show at a specific media query */}
                        <div className="menu-icon">
                            {/* Will add an icon */}
                        </div>
                        
                        <ul className="nav-menu">
                            <div id="navLogo">
                                <p className="homepageLink">
                                    {/* Add image or App title  */}
                                    Streamin
                                </p>
                            </div>
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
                                        className="nav-link"
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