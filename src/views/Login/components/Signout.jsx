import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../features/user/userSlice"
import { setView, toggleShowLogin } from "../../../features/view/viewSlice"

const Signout = props => {
    const dispatch = useDispatch()

    const {
        username
    } = useSelector(store => store.user.user)

    const handleAddVideo = () => {
        dispatch(setView("Add Video"))
        dispatch(toggleShowLogin())
    }

    return(
        <div className="signout">
            <h1>Welcome <span>{username}</span>!</h1>
            <p className="addVideoLink" onClick={handleAddVideo}>
                <i 
                        className="fa-solid fa-square-plus"
                />
                {` Add video`}
            </p>
            <p className="signoutLink" onClick={() => dispatch(logout())}>Signout</p>
        </div>
    )
}

export default Signout