import React from 'react'

import {
    Form,
    Signout
} from './components';

import './Styles.css'

const SignIn = props => {
    return(
        <section className='login'>
            {props.user.username === "Guest"
                ? <>
                    <Form 
                        user = {props.user}
                        modifyUser = {props.modifyUser}
                        toggleLogin={props.toggleLogin}
                    /> 
                </>
                : < Signout 
                    user = {props.user}
                    handleSignout={props.handleSignout}
                    handleToggleAddVideo={props.handleToggleAddVideo}
                />
            }
        </section>
    )
}

export default SignIn