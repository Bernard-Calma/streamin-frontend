import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { videoSearch } from '../../../features/video/videoSlice';
import { setView } from '../../../features/view/viewSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")

    const handleChange = e => setSearch(e.target.value)
    const handleSearch = e => {
        e.preventDefault()
        dispatch(videoSearch(search));
        dispatch(setView("Search"));
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
                <i className="fa-solid fa-magnifying-glass"/>
                </button>
        </form>
    </div>
    )
}
export default SearchBar