import React from 'react'
import './Styles.css'
import { SearchBar } from './components';
// Import the ICONIMAGE
// import logoImage from '.'

// // Import Sign Form
// import SignInForm from './SignIn'
const Header = props =>  {
    return(
        <header className="header container-fluid ">
            <h1 className="logo" onClick={props.handleLogo}>Streamin</h1>
            <nav className="navBar">
                <p className='navBar item'>HOME</p>
            </nav>

            <div className='searchBar'>
                <SearchBar />
            </div>

            <div className='user'>
                <p>{props.user.username ? props.user.username : "Guest" }</p>
                <i class="fa-solid fa-user"></i>
            </div>  
        </header>
    );
}

export default Header