import React from 'react'

import './Styles.css'
import {
    Form,
    Signout
} from './components';

const SignIn = props => {
        // return ( !this.props.register 
        //     ?<div className="holder">
        //         <div className=" container-fluid formContainer">
        //         <div className="formOuterSignIn">
        //             <div className="signInTitle">
        //                 <h2 className="signIn">Sign In</h2>
        //             </div>
                
                
        //         <form id="signInForm"
        //         onSubmit={this.props.handleLogin}>
        //             <div className="input-field">
        //                 <label htmlFor="username"
        //                 className="labelStyle">Username: 
        //                 </label>
        //                 <input
        //                     id="username"
        //                     type="text"
        //                     name="username"
        //                     // onChange={this.props.handleChange}
        //                     required
        //                 />
        //             </div>
        //             <div className="input-field">
        //                 <label 
        //                 htmlFor="password"
        //                 className="labelStyle">Password: </label>
        //                 <input
        //                     id="password"
        //                     type="password"
        //                     name="password"
        //                     // onChange={this.props.handleChange}
        //                 />
        //             </div>
        //             <div className=" input-field formSubmit">
        //                 <input className="formSub"
        //                     type="submit"
        //                     value='Sign In'
        //                 />
        //             </div>
        //             <div>
        //         <span className="registerLink">
        //             Want to join?
        //             Register <span id="registerPageLink" onClick={this.props.onClickRegister}>here.</span>
        //         </span>
        //         </div>
        //         </form>
        //         </div>
                
        //     </div>
        //     </div>
        //     // if register is true show register component
        //     : <>
        //         {/* <Register
        //             handleRegister={this.props.handleRegister}
        //             handleChange={this.props.handleChange}
        //             message = {this.props.message}
        //         /> */}
        //     </>
        // );
        return(
            <section className='login'>
                {
                    props.user.username === "Guest"
                    ? <>
                        <Form 
                            handleChangeUser = {props.handleChangeUser}
                            handleToggleLoginPage={props.handleToggleLoginPage}
                        /> 
                    </>
                    : < Signout 
                        user = {props.user}
                    />
                }
                
            </section>
        )
    }

export default SignIn