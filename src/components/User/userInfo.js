import React , {Component} from "react"
import CreateForm from "../CreateForm";

class UserInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            createVideo: false,
        }
    }

    handleCreateSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            createVideo: true,
        })
    }

    render(){
        return( !this.state.createVideo
            ?
            <div className = "userInfo" >
                {/* Pass in user name below */}
                <div className = "createVideo" >
                    <input type = "button" value = "Create" id="createVideoButton" onClick={this.handleCreateSubmit}/>
                </div>
                <div className = "usernameInfo">
                    <p> Sign in as 
                        <br/>
                    <span id="usernameInfoName"> {this.props.user.username} 
                    </span></p>
                </div>
            </div>
            : 
            <>
                <CreateForm />
            </>
        )
    }
}

export default UserInfo;
