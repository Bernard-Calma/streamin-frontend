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
            <h1 className="logo" onClick={props.handleShowLandingPage}>Streamin</h1>
            <nav className="navBar">
                <p className='navBar item' onClick={props.handleShowLandingPage}>HOME</p>
            </nav>

            <div className='searchBar'>
                <SearchBar />
            </div>

            <div className='user'>
                <p>{props.user.username ? props.user.username : "Guest" }</p>
                <i 
                    class="fa-solid fa-user"
                    onClick={props.handleToggleLoginPage}
                />
            </div>  
        </header>
    );
}

export default Header