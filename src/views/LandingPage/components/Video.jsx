import React from "react";
import { format } from "timeago.js"
import "../Styles.css"
import { useDispatch } from "react-redux";
import { setVideoToShow } from "../../../features/video/videoSlice";
import { setView } from "../../../features/view/viewSlice";

const Video = ( {video} ) => {
    const dispatch = useDispatch();
    
    const {
        _id,
        title,
        videoLink,
        description,
        comments,
        publishedDate
    } = video

    const showVideo = () => {
        dispatch(setVideoToShow(video))
        dispatch(setView("Show"))
    }
    
    return( 
        <div className="video" onClick={showVideo}>
            <div className="videoImage">
                {/* Enclosed inside a div to provide diferent click events */}
                <iframe 
                    title={_id}
                    name={title}
                    src={videoLink}
                    style={{pointerEvents: "none"}}
                >
                </iframe>
            </div>
            
            <div className="videoInfo">
                <h3 className="videoTitle">{title}</h3>
                <p className="videoDescription">{description}</p>
                <div className="videoFooter">            
                    <i className="fa-regular fa-comment" style={{color: "white"}}> {comments.length} </i>
                    <p className="publishedDate">{format(publishedDate)}</p>
                    <i className="fa-solid fa-heart" style={{color: "white"}}></i>
                </div>
            </div>
        </div>
    )
}


export default Video;