import React, { useEffect, useState } from "react";
import './Styles.css'
import { Video } from "./components";
import Show from "../Show/Show";
import SignIn from "../Login/SignIn";
import Loading from "../../components/Loading/Loading";

const LandingPage = props => {
    const [loading, setLoading] = useState(true)

    const handleShowVideo = video => {
        props.setVideoToShow(video);
        props.modifyAppView.show();
    }

    useEffect(() => {
        const load = setTimeout(() => {
            setLoading(false)
        }, 6000);
        return () => clearTimeout(load)
    },[loading])
    
    return (
        <main>
            <Loading loading = {loading}/>
            <div className={`videoList ${!loading? 'opcaity-100' : 'opacity-0'}`}>
                {props.videoList.map(video => 
                    <Video 
                        key={video._id}
                        video={video} 
                        showVideo={() => handleShowVideo(video)}
                    />
                )}
            </div>

            
        </main>
    )
}

export default LandingPage;