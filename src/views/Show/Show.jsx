import React, { useState } from "react";
import './Styles.css'
import { Comments, VideoControl } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { modifyVideo } from "../../features/video/videoSlice";

const Show = props => {
    const dispatch = useDispatch();
    const [editEnable, setEditEnable] = useState(false)

    const {
        videoToShow
    } = useSelector(store => store.videoList)

    const {
        videoLink,
        user,
        likes
    } = videoToShow;

    const {
        username,
        _id
    } = useSelector(store => store.user.user)

    const [video, setVideo] = useState({...videoToShow})

    const handleToggleEdit = () => {
        if (editEnable) {
            dispatch(modifyVideo(video))
        }
        setEditEnable(!editEnable)
    }
    const handleChange = e => {
        if (editEnable) setVideo({...video, [e.target.name]: e.target.value})
    }

    const handleLikeVideo = () => {
        if (username !== "Guest") {
            dispatch(modifyVideo({...video, likes: video.likes.push(_id)}))
        } else {
            props.handleToggleLoginPage()
        }
    }

    return (
        <section className="showVideo">
            <div className="left">
                <div className="videoPlayer">
                    <iframe 
                        title={video.title}
                        src={videoLink}
                    />
                </div>

                <div className="divTitle">
                    <div className="buttons">
                        {
                            videoToShow.likes.includes(_id)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart" onClick={handleLikeVideo}></i>
                        }
                        <p>{likes.length}</p>
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
                {_id === user &&
                    <VideoControl 
                        video={video}
                        handleToggleEdit = {handleToggleEdit}
                    />
                }  
            </div>

            <div className="right">
                <Comments/>
            </div>
        </section>
    );
};

export default Show;