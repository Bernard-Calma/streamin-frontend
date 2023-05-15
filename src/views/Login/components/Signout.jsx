import React from "react"

const Signout = props => {

    const handleAddVideo = () => {
        props.modifyAppView.addVideo()
        props.toggleLogin()
    }

    const handleSignOut = () => {
        props.modifyUser.logout();
        props.toggleLogin()
    }
    return(
        <div className="signout">
            <h1>Welcome <span>{props.user.username}</span>!</h1>
            <p className="addVideoLink" onClick={handleAddVideo}>{`> Add a video`}</p>
            <p className="signoutLink" onClick={handleSignOut}>Signout</p>
        </div>
    )
}

export default Signout