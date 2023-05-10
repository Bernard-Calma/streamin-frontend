import React, { useState } from "react";

const Form = props => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        passwordCheck: "",
    })
    const [viewLogin, setViewLogin] = useState(true)
    const handleChange = e => setUser({...user, [e.target.name]: e.target.value})
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        props.handleChangeUser(user)
        props.handleToggleLoginPage()
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
                    ? <>
                        <div>
                            <p className="registerLink"> Want to join? Register 
                                <span 
                                    id="registerPageLink" 
                                    onClick={handleToggleRegister}
                                > here.
                                </span>
                            </p>
                        </div>
                    </>
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
                <button>Log in</button>  
            </form>
        </>
    )
}

export default Form;