import React from "react";
import { format } from "timeago.js"
import "../Styles.css"

const Video = props => {
    return( 
        <div className="video" onClick={props.showVideo}>
            <div className="videoImage">
                {/* Enclosed inside a div to provide diferent click events */}
                <iframe 
                    title={props.video._id}
                    name={props.title}
                    src={props.video.videoLink}
                    style={{pointerEvents: "none"}}
                >
                </iframe>
            </div>
            
            <div className="videoInfo">
                <h3 className="videoTitle">{props.video.title}</h3>
                <p className="videoDescription">{props.video.description}</p>
                <div className="videoFooter">            
                    <i className="fa-regular fa-comment" style={{color: "white"}}> {props.video.comments.length} </i>
                    <p className="publishedDate">{format(props.video.publishedDate)}</p>
                    <i className="fa-solid fa-heart" style={{color: "white"}}></i>
                </div>
            </div>
        </div>
    )
}


export default Video;