import axios from "axios";
import React, { useState } from "react";

const VideoControl = props => {
    const [alertBox, setAlertBox] = useState(false)

    const toggleAlertBox = () => {
        setAlertBox(!alertBox)
    }

    const handleDelete = async () => {
        await axios({
            method: "DELETE",
            url:`${process.env.REACT_APP_SERVER_URL}/videos/${props.video._id}`
        })
        .then(res => {
            // console.log(res.data)
            props.deleteVideo()
            props.handleShowLandingPage()
            props.handleSetShow("Landing Page")
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="videoControl">
            <button className="btnModify" onClick={props.handleToggleEdit}>Edit</button>
            <button className="btnDelete" onClick={toggleAlertBox}>Delete</button>
            {
                alertBox &&
                <div className="alertBox">
                    <h1>Delete</h1>
                    <p>Are you sure you want to delete?</p>
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={toggleAlertBox}>No</button>
                </div>
            }
            
        </div>
    )
}

export default VideoControl