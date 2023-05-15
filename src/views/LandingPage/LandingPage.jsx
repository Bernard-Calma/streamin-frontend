import React, { useEffect, useState } from "react";
import './Styles.css'
import { Video } from "./components";
import Show from "../Show/Show";
import SignIn from "../Login/SignIn";
import Loading from "../../components/Loading/Loading";

const LandingPage = props => {
    const [toggleLogin, setToggleLogin] = useState(true)
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

    useEffect(() => {
        // console.log("Toggle Login")
        const handleToggleLogin = () => {
            setToggleLogin(!toggleLogin)
        }

        handleToggleLogin()
    },[props.showLogin])
    return (
        <main>
            <Loading loading = {loading}/>
            {
                toggleLogin && 
                <SignIn 
                    handleChangeUser = {props.handleChangeUser}
                    handleToggleLoginPage={props.handleToggleLoginPage}
                    handleToggleAddVideo={props.handleToggleAddVideo}
                    handleSignout={props.handleSignout}
                    user = {props.user}
                />
            }
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