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
        // console.log("Handle Modify Video - Data: ", video)
        await axios({
            method: "PUT",
            url:`${process.env.REACT_APP_SERVER_URL}/videos/${props.video._id}`,
            data: video,
            withCredentials: true
        })
        .then(res => {
            console.log("Res.Data", res.data)
            props.modifyVideoList.modifyVideo(res.data)
            setVideo(res.data)
        })
        .catch(err => console.log(err))
    }

    const handleLikeVideo = () => {
        console.log("Show Liked: ", props.user._id)
        if (props.user.username !== "Guest") {
            setVideo({...props.video, likes: props.video.likes.push(props.user._id) })
            handleModifyVideo()
        } else {
            props.handleToggleLoginPage()
        }
    }

    const modifyComment = {
        add: newComment => {
            props.modifyVideoList.modifyVideo({...video, 
                comments: [...props.video.comments, newComment]})
            },
        delete: deleteComment => {
            props.modifyVideoList.modifyVideo({...video, 
                comments: props.video.comments.filter(comment => comment._id !== deleteComment._id)})
            },
        modify: modifiedComment => {
            props.modifyVideoList.modifyVideo({...video,
                comments: props.video.comments.map(comment => comment._id === modifiedComment._id ? modifiedComment : comment)
            })
        }
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
                        {
                            props.video.likes.includes(props.user._id)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart" onClick={handleLikeVideo}></i>
                        }
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
                {props.user._id === props.video.user &&
                    <VideoControl 
                        video={props.video}
                        handleToggleEdit = {handleToggleEdit}
                        modifyVideoList = {props.modifyVideoList}
                        modifyAppView = {props.modifyAppView}
                    />
                }  
            </div>

            <div className="right">
                <Comments
                    video={props.video}
                    user={props.user}
                    modifyComment={modifyComment}
                    handleToggleLoginPage={props.handleToggleLoginPage}
                />
                    
            </div>
        </section>
    );
};

export default Show;