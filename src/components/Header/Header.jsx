import React from 'react'
import './Styles.css'
import { SearchBar } from './components';
import Logo from "../../assets/Logo2.png"

const Header = props =>  {
    return(
        <header className="header container-fluid ">
            <img className="logo" src={Logo} alt="logo" onClick={props.handleShowLandingPage}/>
            <nav className="navBar">
                <p className='navBar item' onClick={props.handleShowLandingPage}>HOME</p>
                {props.user.username !== "Guest" && <p className='navBar item' onClick={props.getUserVideos}>MY VIDEOS</p>}
            </nav>

            <div className='searchBar'>
                <SearchBar handleChangeVideoList={props.handleChangeVideoList}/>
            </div>

            <div className='user'>
                <p>{props.user.username ? props.user.username : "Guest" }</p>
                <i 
                    className="fa-solid fa-user"
                    onClick={props.handleToggleLoginPage}
                />
            </div>  
        </header>
    );
}

export default Header