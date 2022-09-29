import React, { Component } from 'react'

import User from './User/user'
import CreateForm from './CreateForm'
class CreateBtn extends Component {
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
    render() {
        return(!this.state.createVideo
            <div>
                

            </div>
            <>
               
                ?<User/>
                :<CreateForm/>
            </>
           

          
           
        )    
    }       
}

export default CreateBtn