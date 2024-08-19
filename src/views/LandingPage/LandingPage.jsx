import React, { useEffect, useState } from "react";
import './Styles.css'
import { Video } from "./components";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";

const LandingPage = () => {
    const [loading, setLoading] = useState(true)

    const {
        videoList,
        searchedVideoList,
        isLoading
    } = useSelector(store => store.videoList)

    const {
        _id
    } = useSelector(store => store.user.user)

    const {
        view
    } = useSelector(store => store.view)

    useEffect(() => {
        setLoading(false)
    },[isLoading])

    return (
        <main>
            {
                isLoading ? <Loading loading = {loading}/>
                : <div className={`videoList ${!loading? 'opcaity-100' : 'opacity-0'}`}>
                    { view === "Landing Page" 
                        ? videoList?.map(video => 
                            <Video 
                                key={video._id}
                                video = {video}
                            />
                        )
                    : view === "My Videos"
                        // Only show video for current logged in user
                        ? videoList?.map(video => video.user === _id
                            ?<Video 
                                key={video._id}
                                video = {video}
                            />
                            : <></>)
                    : view === "Search"
                        ? searchedVideoList?.map(video =>
                            <Video 
                                key={video._id}
                                video={video}
                            />
                        )
                    : <></>
                    }
                </div>
            }
            
            

            
        </main>
    )
}

export default LandingPage;