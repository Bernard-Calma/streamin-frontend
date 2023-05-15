import React from "react"

const Signout = props => {
    return(
        <div className="signout">
            <h1>Welcome <span>{props.user.username}</span>!</h1>
            <p className="addVideoLink" onClick={() => props.modifyAppView.addVideo()}>{`> Add a video`}</p>
            <p className="signoutLink" onClick={props.handleSignout}>Signout</p>
        </div>
    )
}

export default Signout