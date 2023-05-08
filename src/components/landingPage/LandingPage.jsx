import axios from "axios";
import React, { useEffect, useState } from "react";
import './Styles.css'
import Video from '../Video/Video'
import Show from "../Video/Show";

const LandingPage = props => {
    const [videoList, setVideoList] = useState([])
    const [show, setShow] = useState("Landing Page")
    const [videoToShow, setVideoToShow] = useState({})

    const handleShowVideo = video => {
        setShow("Show");
        setVideoToShow(video);
    }

    useEffect(() => {
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
            {show === "Landing Page"
                ? <>
                    {videoList.map(video => 
                        <Video 
                            key={video._id}
                            video={video} 
                            handleShowVideo={() => handleShowVideo(video)}
                        />
                    )}
                </>
            :show === "Show"
                ? <Show 
                    video = {videoToShow}
                />
            : <></>
            }
            
        </main>
    )
}

export default LandingPage;