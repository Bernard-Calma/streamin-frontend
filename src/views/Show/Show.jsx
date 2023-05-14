import React, { useState } from "react";
import './Styles.css'
import { Comments, VideoControl } from "./components";
import axios from "axios";

const Show = props => {
    const [editEnable, setEditEnable] = useState(false)
    const [video, setVideo] = useState(props.video)
    const [comments, setComments] = useState(props.video.comments)

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
        console.log("Handle Modify Video - Data: ", video)
        await axios({
            method: "PUT",
            url:`${process.env.REACT_APP_SERVER_URL}/videos/${props.video._id}`,
            data: video,
            withCredentials: true
        })
        .then(res => {
            console.log("Res.Data", res.data)
            props.modifyVideo(res.data)
            setVideo(res.data)
        })
        .catch(err => console.log(err))
    }

    const handleLikeVideo = () => {
        if (props.user.username !== "Guest") {
            setVideo({...props.video, likes: props.video.likes.push(props.user.id) })
            handleModifyVideo()
        } else {
            props.handleToggleLoginPage()
        }
    }

    const handleAddComment = newComment => {
        setVideo({...props.video, comments: props.video.comments.push(newComment) })
        console.log("Add Comment:", video)
        handleModifyVideo()
    }

    const handleDeleteComment = newComment => {
        setComments(comments.filter(comment => comment._id !== newComment._id))
        // console.log(comments)
        setVideo({...video, comments: comments.filter(comment => comment._id !== newComment._id)})
        handleModifyVideo()
    }

    const handleEditComment = editedComment => {
        // Set video calling other keys
        // Map through all comments
        // If current comment is = editedComment return edited comment
        // Assign new comment map to video
        setVideo({
            ...props.video, 
            comments: props.video.comments.map(comment => 
                comment._id === editedComment._id ? editedComment : comment) 
        })
        // console.log(video)
        handleModifyVideo()
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
                            props.video.likes.includes(props.user.id)
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
                {props.user.id === props.video.user &&
                    <VideoControl 
                        video={props.video}
                        handleShowLandingPage = {props.handleShowLandingPage}
                        handleSetShow = {props.handleSetShow}
                        handleToggleEdit = {handleToggleEdit}
                        deleteVideo={props.modifyVideoList}
                    />
                }  
            </div>

            <div className="right">
                <Comments 
                    video={props.video}
                    comments={comments}
                    user={props.user}
                    handleAddComment={handleAddComment}
                    handleEditComment={handleEditComment}
                    handleDeleteComment={handleDeleteComment}
                />
                    
            </div>
        </section>
    );
};

export default Show;