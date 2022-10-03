import React from 'react';
// Import FontAwesome icon for the search bar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//URL
let baseURL = process.env.REACT_APP_SERVER_URL;

class SeachBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: "",
        }
    }

    render(){
        return(
            <div className="searchBar">
            <form onSubmit={this.props.handleSearch}>
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="search your video"
                name="search"
                required
                onChange={this.props.handleChange}
                
            />
             <button type="submit"className="fontIcon">
                {/* Search */}
                 <FontAwesomeIcon   icon={solid( "magnifying-glass")} />
            </button>
        </form>
        </div>
        )
    }  
}
export default SeachBar