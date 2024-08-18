import React, { useEffect, useState } from "react";
import './Styles.css'
import { Video } from "./components";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setVideoToShow } from "../../features/video/videoSlice";

const LandingPage = props => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    const handleShowVideo = video => {
        dispatch(setVideoToShow(video));
        props.modifyAppView.show();
    }

    const {
        videoList
    } = useSelector(store => store.videoList)

    useEffect(() => {
        const load = setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => clearTimeout(load)
    },[loading])

    return (
        <main>
            {
                loading ? <Loading loading = {loading}/>
                : <div className={`videoList ${!loading? 'opcaity-100' : 'opacity-0'}`}>
                    { props.appView === "Landing Page" 
                        ? videoList.map(video => 
                            <Video 
                                key={video._id}
                                video={video} 
                                showVideo={() => handleShowVideo(video)}
                            />
                        )
                        : videoList.map(video => video.user === props.user._id
                            ?<Video 
                                key={video._id}
                                video={video} 
                                showVideo={() => handleShowVideo(video)}
                            />
                            : <></>)
                    }
                </div>
            }
            
            

            
        </main>
    )
}

export default LandingPage;