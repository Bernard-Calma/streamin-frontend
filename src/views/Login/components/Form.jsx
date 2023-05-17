import axios from "axios";
import React, { useState } from "react";

const Form = props => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        passwordCheck: "",
    })
    let [viewLogin, setViewLogin] = useState(true)
    let [errMessage, setErrMessage] = useState('')
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
                props.modifyUser.login(res.data)
                props.toggleLogin()
            })
            .catch(({response}) => {
                // console.log(response)
                setErrMessage(response.data.err)
            })
        } else {
            const regex =  /^[A-Z]\w{6}$/;
            if (user.password !== user.passwordCheck) {
                return setErrMessage("Password does not match");
            } else if (!regex.test(user.password)) {
                return setErrMessage(`Invalid password. \nPassword must be at least 6 characters. \nPassword must at least have one uppercase letter`);
            }
            await axios({
                method: "POST",
                url: `${process.env.REACT_APP_SERVER_URL}/users`,
                data: user,
                withCredentials: true
            })
            .then(res => {
                // console.log(res.data)
                props.modifyUser.login(user)
                props.toggleLogin()
            })
            .catch(({response}) => setErrMessage(response.data.err))
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
                            type="password" 
                            name="passwordCheck"
                            value={user.passwordCheck}
                            placeholder="re-enter password"
                            required
                            onChange={handleChange}
                        />
                        <p className="errMessage">{errMessage}</p>
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