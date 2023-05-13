import axios from "axios";
import React, { useState } from "react";

const Form = props => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        passwordCheck: "",
    })
    const [viewLogin, setViewLogin] = useState(true)
    const [errMessage, setErrMessage] = useState('')
    const handleChange = e => setUser({...user, [e.target.name]: e.target.value})
    
    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(user);
        if (viewLogin) {
            await axios({
                method: "POST",
                url: `${process.env.REACT_APP_SERVER_URL}/users/login`,
                data: user,
                withCredentials: true
            })
            .then(res => {
                props.handleChangeUser(user)
                props.handleToggleLoginPage()
            })
            .catch(({response}) => setErrMessage(response.data.err))
        } else {
            await axios({
                method: "POST",
                url: `${process.env.REACT_APP_SERVER_URL}/users`,
                data: user,
                withCredentials: true
            })
            .then(res => {
                console.log(res.data)
                // props.handleChangeUser(user)
                // props.handleToggleLoginPage()
            })
            .catch(err => console.log(err))
        }
        
    }

    const handleToggleRegister = () => {
        setViewLogin(!viewLogin)
    }

    return(
        <>
            {viewLogin
                ? <h1>Login</h1>
                : <h1>Register</h1>
            }
            <form onSubmit={handleSubmit}>  
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={user.username}
                    required
                    autoComplete="false"
                    onChange={handleChange}
                />
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    required
                    autoComplete="false"
                    onChange={handleChange}
                />
                {viewLogin
                    ? <div>
                            <p className="errMessage">{errMessage}</p>
                            <p className="registerLink"> Want to join? Register 
                                <span 
                                    id="registerPageLink" 
                                    onClick={handleToggleRegister}
                                > here.
                                </span>
                            </p>
                        </div>
                    : <>
                        <input 
                            type="passwordCheck" 
                            name="passwordCheck"
                            value={user.passwordCheck}
                            placeholder="re-enter password"
                            required
                            onChange={handleChange}
                        />
                        <div>
                            <p className="registerLink"> Already registered? Login
                                <span 
                                    id="registerPageLink" 
                                    onClick={handleToggleRegister}
                                > here.
                                </span>
                            </p>
                        </div>
                    </>
                }
                <button>{viewLogin? "Login" : "Register"}</button>  
            </form>
        </>
    )
}

export default Form;