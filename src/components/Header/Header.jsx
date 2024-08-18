import React from 'react'
import './Styles.css'
import { SearchBar } from './components';
import Logo from "../../assets/Logo2.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowLogin } from '../../features/view/viewSlice';

const Header = props =>  {
    const dispatch = useDispatch();
    
    const {
        username
    } = useSelector(store => store.user.user)

    const {
        showLogin
    } = useSelector(store => store.view)

    return(
        <header className="header container-fluid ">
            <img className="logo" src={Logo} alt="logo" onClick={() => props.modifyAppView.landingPage()}/>
            <nav className="navBar">
                <p className='navBar item' onClick={() => props.modifyAppView.landingPage()}>HOME</p>
                {username !== "Guest" && <p className='navBar item' onClick={() => props.modifyAppView.myVideos()}>MY VIDEOS</p>}
            </nav>

            <div className='searchBar'>
                <SearchBar handleChangeVideoList={props.handleChangeVideoList}/>
            </div>

            <div className='user'>
                <p>{username ? username: "Guest" }</p>
                <i 
                    className="fa-solid fa-user"
                    onClick={() => dispatch(toggleShowLogin())}
                />
            </div>  
        </header>
    );
}

export default Header