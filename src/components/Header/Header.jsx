import React, { useState } from 'react'
import './Styles.css'
import { SearchBar } from './components';
import Logo from "../../assets/Logo2.png"
import { useDispatch, useSelector } from 'react-redux';
import { setView, toggleShowLogin } from '../../features/view/viewSlice';

const Header = () =>  {
    const dispatch = useDispatch();

    const [menuOpen, setMenuOpen] = useState(false)
    
    const {
        username
    } = useSelector(store => store.user.user)

    const {
        navSelected
    } = useSelector(store => store.view)

    const setSelected = (title) => {
        return title === navSelected && "selected";
    }

    return(
        <header className="header container-fluid ">
            <img className="logo" src={Logo} alt="logo" onClick={() => dispatch(setView("Landing Page"))}/>
            <i class="fa-solid fa-bars" onClick={() => setMenuOpen(!menuOpen)}></i>
            <nav className={`navBar ${menuOpen && "open"}`}>
                <p className={`navBar item ${setSelected("Landing Page")}`} onClick={() => dispatch(setView("Landing Page"))}>HOME</p>
                {username !== "Guest" && <p className={`navBar item ${setSelected("My Videos")}`} onClick={() => dispatch(setView("My Videos"))}>MY VIDEOS</p>}
            </nav>

            <div className='searchBar'>
                <SearchBar/>
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