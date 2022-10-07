import React, {Component} from 'react'
// Import the fontawesome to use the burger/bar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


// Import Searchbar Component
import SeachBar from './SearchBar';

//Import SignOut Component
import SignOut from './signout'

class SignInHeader extends Component  {
    constructor(props) {
        super(props)
        this.state={
            clicked:false
        }
    }
   
    toggleNav = ()=>{
        this.setState({clicked:!this.state.clicked})
        
    }
   
    
    render(){
        // console.log("I click the button and it is now ",this.state.clicked);

         const burgerStyle={
        fontsize:"43px"}

        return(  
       <div className="header container-fluid">
            <nav className="navbar2">
                {/* Menu Icon that will show at a specific media query */}
                <div className="menu-icon">
                    {/* Will add an icon */}
                </div>
                <div id="navLogo">
                <p className="homepageLink" onClick={this.props.handleLogo}>
                    {/* Add image or App title  */}
                    Streamin
                </p>
                </div>
                <ul className="nav-menu">
                
                
                <div className={this.state.clicked ?"burger-list active" :"burger-list"} >
                   
                <div className="nav-item burger-item">
                <SeachBar
                    handleChange = {this.props.handleChange}
                    search = {this.props.search}
                    handleSearch = {this.props.handleSearch}
                />
                </div>
             

                <div className="signOut nav-item burger-item">
                    <SignOut signOut={this.props.signOut}/>
                </div>
                </div>
                </ul>


                <span onClick={this.toggleNav}className="hamburger" style={burgerStyle}>
                <FontAwesomeIcon icon={solid ("bars")} id="bars" /></span>
            </nav>
            
       </div>
    );
    }
}

export default SignInHeader