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
                        user ={props.user}
                        handleChangeUser = {props.handleChangeUser}
                        handleToggleLoginPage={props.handleToggleLoginPage}
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