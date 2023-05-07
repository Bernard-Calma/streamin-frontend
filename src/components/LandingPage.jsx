import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
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

        </main>
    )
}

export default LandingPage;