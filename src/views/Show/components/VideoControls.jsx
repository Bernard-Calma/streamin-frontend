import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../../../features/video/videoSlice";

const VideoControl = props => {
    const dispatch = useDispatch();
    const {
        _id
    } = useSelector(store => store.videoList.videoToShow)
    const [alertBox, setAlertBox] = useState(false)

    const toggleAlertBox = () => {
        setAlertBox(!alertBox)
    }

    const handleDeleteVideo = () => {
        dispatch(deleteVideo(_id))
        props.modifyAppView.landingPage();
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
                    <button onClick={handleDeleteVideo}>Yes</button>
                    <button onClick={toggleAlertBox}>No</button>
                </div>
            }
            
        </div>
    )
}

export default VideoControl