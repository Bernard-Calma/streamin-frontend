import React, { useState } from 'react';
// Import FontAwesome icon for the search bar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import axios from 'axios';

const SearchBar = props => {
    const [search, setSearch] = useState("")

    const handleChange = e => setSearch(e.target.value)
    const handleSearch = (e) => {
        e.preventDefault()
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/videos/search/${search}`,
            withCredentials: true
        })
        .then(res => props.handleChangeVideoList(res.data))
        .catch(err => console.log(err))
    }
    
    return(
        <div className="searchBar">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    id="header-search"
                    placeholder="search video"
                    name="search"
                    required
                    onChange={handleChange}
                />
                <button type="submit"className="fontIcon">
                {/* Search */}
                    <FontAwesomeIcon icon={solid( "magnifying-glass")}/>
                </button>
        </form>
    </div>
    )
}
export default SearchBar