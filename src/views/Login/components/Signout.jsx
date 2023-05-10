import React from "react"

const Signout = props => {
    return(
        <div className="signout">
            <h1>Welcome</h1>
            <p>{props.user.username}</p>
            <p>Signout</p>
        </div>
    )
}

export default Signout