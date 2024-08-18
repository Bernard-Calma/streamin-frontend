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
        if (props.user.username !== "Guest") {
            dispatch(modifyVideo({...video, likes: video.likes.push(props.user._id)}))
        } else {
            props.handleToggleLoginPage()
        }
    }

    const modifyComment = {
        add: newComment => {
            dispatch(modifyVideo({...video, 
                comments: [...props.video.comments, newComment]}))
            },
        delete: deleteComment => {
            dispatch(modifyVideo({...video, 
                comments: video.comments.filter(comment => comment._id !== deleteComment._id)}))
            },
        modify: modifiedComment => {
            dispatch(modifyVideo({...video,
                comments: video.comments.map(comment => comment._id === modifiedComment._id ? modifiedComment : comment)
            }))
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
                            videoToShow.likes.includes(props.user._id)
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
                {props.user._id === user &&
                    <VideoControl 
                        video={video}
                        handleToggleEdit = {handleToggleEdit}
                        modifyVideoList = {props.modifyVideoList}
                        modifyAppView = {props.modifyAppView}
                    />
                }  
            </div>

            <div className="right">
                <Comments
                    video={video}
                    user={props.user}
                    modifyComment={modifyComment}
                    handleToggleLoginPage={props.handleToggleLoginPage}
                />
                    
            </div>
        </section>
    );
};

export default Show;