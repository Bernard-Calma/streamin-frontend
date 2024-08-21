import React from 'react'

import {
    Form,
    Signout
} from './components';

import './Styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowLogin } from '../../features/view/viewSlice';

const SignIn = () => {
    const dispatch = useDispatch();
    const {
        username
    } = useSelector(store => store.user.user)

    const {
        navSelected
    } = useSelector(store => store.view)

    return(
        <section className='login'>
            {  navSelected === "Landing Page" && <i class="fa-regular fa-circle-xmark" onClick={() => dispatch(toggleShowLogin())}/> }
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