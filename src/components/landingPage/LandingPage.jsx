import axios from "axios";
import React, { useEffect, useState } from "react";
import './Styles.css'
import Video from "../video";

const LandingPage = props => {
    const [videoList, setVideoList] = useState([])
    
    useEffect( () => {
        const handleGetVideoList = () => {
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_SERVER_URL}/videos`
            })
            .then(res => {
                // console.log(res.data)
                setVideoList(res.data)
            })
            .catch(err => console.log(err))
        }

        handleGetVideoList()
    },[])
    return (
        <main>
            { videoList.map(video => <Video video={video} />) }
        </main>
    )
}

export default LandingPage;