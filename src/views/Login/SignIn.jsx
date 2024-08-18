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
                        modifyUser = {props.modifyUser}
                        toggleLogin={props.toggleLogin}
                    /> 
                </>
                : < Signout 
                    modifyAppView={props.modifyAppView}
                    toggleLogin={props.toggleLogin}
                />
            }
        </section>
    )
}

export default SignIn