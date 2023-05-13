import React, { useState } from "react";
import './Styles.css'
import { Comments, VideoControl } from "./components";
import axios from "axios";

const Show = props => {
    const [editEnable, setEditEnable] = useState(false)
    const [video, setVideo] = useState(props.video)

    const handleToggleEdit = () => {
        if (editEnable) {
            handleModifyVideo()
        }
        setEditEnable(!editEnable)
    }
    const handleChange = e => {
        if (editEnable) setVideo({...video, [e.target.name]: e.target.value})
    }

    
    const handleModifyVideo = async () => {
        await axios({
            method: "PUT",
            url:`${process.env.REACT_APP_SERVER_URL}/videos/${props.video._id}`,
            data: video,
            withCredentials: true
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <section className="showVideo">
            <div className="left">
                <div className="showVideo videoPlayer">
                    <iframe 
                        title={props.video._id}
                        name={props.title}
                        src={props.video.videoLink}
                    />
                </div>

                <div className="divTitle">
                    <div className="buttons">
                        <i class="fa-solid fa-heart"></i>
                        <p>{props.video.likes.length}</p>
                    </div>  
                    <input 
                        type="text" 
                        name="title" 
                        className={`title ${editEnable ? 'inputEnabled' : ''}`} 
                        value={video.title} 
                        onChange={handleChange} 
                        contentEditable={editEnable}/>
                </div>
                <textarea 
                    type="text" 
                    name="description" 
                    className={`description ${editEnable ? 'inputEnabled' : ''}`} 
                    value={video.description} 
                    onChange={handleChange}
                    contentEditable={editEnable}/>       
                {props.user.id === props.video.user &&
                    <VideoControl 
                        video={props.video}
                        handleShowLandingPage = {props.handleShowLandingPage}
                        handleToggleEdit = {handleToggleEdit}
                    />
                }  
            </div>

            <div className="right">
                <Comments video={props.video}/>
            </div>
        </section>
    );
};

export default Show;