import React from 'react';
// Import FontAwesome icon for the search bar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

class SeachBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="searchBar">
            <form >
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="search your video"
                name="s"
                
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