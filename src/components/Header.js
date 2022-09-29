import React, {Component} from 'react'
// Import the Font Awesome bar that will change

//Import About
import About from './About';

class Header extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            showAbout: true
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
                            <a className="homepageLink" href="#">
                                {/* Add image or App title  */}
                                Streamin
                            </a>
                            </div>
                                <li className="nav-item">
                                    <a
                                        id="nav-link"
                                        className="nav-link"
                                        onClick={this.showAbout}
                                    > 
                                    About
                                    </a>
                                </li>
                            </ul>
                        </nav>
                </div>
                {this.state.showAbout === true
                    ? <About />
                    : <></>
                }
            </div>
        );
    }
}

export default Header