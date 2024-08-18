import React from 'react'

import {
    Form,
    Signout
} from './components';

import './Styles.css'
import { useSelector } from 'react-redux';

const SignIn = props => {
    const {
        username
    } = useSelector(store => store.user.user)

    return(
        <section className='login'>
            {username === "Guest"
                ? <>
                    <Form 
                        user = {props.user}
                        modifyUser = {props.modifyUser}
                        toggleLogin={props.toggleLogin}
                    /> 
                </>
                : < Signout 
                    user = {props.user}
                    modifyUser={props.modifyUser}
                    modifyAppView={props.modifyAppView}
                    toggleLogin={props.toggleLogin}
                />
            }
        </section>
    )
}

export default SignIn