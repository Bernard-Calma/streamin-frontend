import React, {Component} from 'react'
// Import the Font Awesome bar that will change

//Import About
import About from './About';

// // Import Sign Form
// import SignInForm from './SignIn'
class Header extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            showAbout: false
        }
    }

    showAbout = () => {
        if(this.state.showAbout === true) {
            this.setState({
                showAbout: false
            })
        } else {
            this.setState({
                showAbout: true
            })
        }
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
                            <p className="homepageLink"
                                onClick={this.props.handleLogo}    
                            >
                                {/* Add image or App title  */}
                                Streamin
                            </p>
                            </div>
                                <li className="nav-item">
                                    <p
                                        id="nav-link"
                                        className="nav-link"
                                        onClick={this.showAbout}
                                    > 
                                    About
                                    </p>
                                </li>
                            </ul>
                        </nav>
                </div>
                {this.state.showAbout === true
                    ? <>
                    <About/>
                    
                    </>
                    
                    : <></>
                }
            </div>
        );
    }
}

export default Header