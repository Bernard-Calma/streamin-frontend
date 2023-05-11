import React, { useEffect, useState } from "react";
import './Styles.css'
import { Video } from "./components";
import Show from "../Show/Show";
import SignIn from "../Login/SignIn";
import Loading from "../../components/Loading/Loading";

const LandingPage = props => {
    const [show, setShow] = useState("Landing Page")
    const [videoToShow, setVideoToShow] = useState({})
    const [toggleLogin, setToggleLogin] = useState(true)
    const [loading, setLoading] = useState(true)

    const handleShowVideo = video => {
        setShow("Show");
        setVideoToShow(video);
    }

    useEffect(() => {
        const load = setTimeout(() => {
            setLoading(false)
        }, 6000);
        return () => clearTimeout(load)
    },[loading])

    useEffect(() => {
        const handleShowLandingPage = () => {
            setShow("Landing Page")
            setLoading(true)
        }

        handleShowLandingPage()
    },[props.showLanding])

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
            {show === "Landing Page"
                ?<>
                    <div className={`videoList ${!loading? 'opcaity-100' : 'opacity-0'}`}>
                        {props.videoList.map(video => 
                            <Video 
                                key={video._id}
                                video={video} 
                                handleShowVideo={() => handleShowVideo(video)}
                            />
                        )}
                    </div>
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