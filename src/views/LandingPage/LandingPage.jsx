import axios from "axios";
import React, { useEffect, useState } from "react";
import './Styles.css'
import { Video } from "./components";
import Show from "../Show/Show";
import SignIn from "../Login/SignIn";

const LandingPage = props => {
    const [videoList, setVideoList] = useState([])
    const [show, setShow] = useState("Landing Page")
    const [videoToShow, setVideoToShow] = useState({})
    const [toggleLogin, setToggleLogin] = useState(true)

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

    useEffect(() => {
        const handleShowLandingPage = () => {
            setShow("Landing Page")
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
            {
                toggleLogin && 
                <SignIn 
                    handleChangeUser = {props.handleChangeUser}
                    handleToggleLoginPage={props.handleToggleLoginPage}
                    user = {props.user}
                />
            }
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