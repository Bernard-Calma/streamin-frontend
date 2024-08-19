import React from 'react'

import {
    Form,
    Signout
} from './components';

import './Styles.css'
import { useSelector } from 'react-redux';

const SignIn = () => {
    const {
        username
    } = useSelector(store => store.user.user)

    return(
        <section className='login'>
            {username === "Guest"
                ? <>
                    <Form/> 
                </>
                : < Signout/>
            }
        </section>
    )
}

export default SignIn