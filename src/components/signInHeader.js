import React, {Component} from 'react'
// Import the bootstrap styling
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// Import Searchbar Component
import SeachBar from './SearchBar';

class signInHeader extends Component  {
    // constructor(props) {
    //     super(props)
    // }
    render(){
        return(  
       <div className="header container">
            <nav className="navbar">
                {/* Menu Icon that will show at a specific media query */}
                <div className="menu-icon">
                    {/* Will add an icon */}
                </div>
                
                <ul className="nav-menu">
                <li className="nav-item">
                <a className="homepageLink" href="#">
                    {/* Add image or App title  */}
                    Streamin
                </a>
                </li>
                <SeachBar/>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> 
                        Sign Out
                        </a>
                    </li>
                </ul>
            </nav>
       </div>
    );
    }
}

export default signInHeader