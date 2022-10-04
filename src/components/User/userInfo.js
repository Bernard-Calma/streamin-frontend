import React , {Component} from "react"

class UserInfo extends Component {
    render(){
        return( 
            <div className="user-infoContainer">
            <div className = "userInfo" >
                {/* Pass in user name below */}
                {
                    !this.props.searchVideos
                    ?
                    <>
                        <div className = "createVideo" >
                            <input type = "button" value = "Create" id="createVideoButton" onClick={this.props.handleCreateSubmit}/>
                        </div>
                    </>
                    :
                    <>
                        <div className = "createVideo" >
                            
                        </div>
                    </>
                }
                <div className = "usernameInfo">
                    <p> Sign in as 
                        <br/>
                    <span id="usernameInfoName"> {this.props.user.username} 
                    </span></p>
                </div>
            </div>
            </div>
        )
    }
}

export default UserInfo;
