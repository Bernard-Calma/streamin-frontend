import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/user/userSlice";
import { toggleShowLogin } from "../../../features/view/viewSlice";

const Form = () => {
    const dispatch = useDispatch();

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
            dispatch(login(user))
            dispatch(toggleShowLogin())
        } else {
            const regex =  /^[A-Z]\w{6}$/;
            if (user.password !== user.passwordCheck) {
                return setErrMessage("Password does not match");
            } else if (!regex.test(user.password)) {
                return setErrMessage(`Invalid password. \nPassword must be at least 6 characters. \nPassword must at least have one uppercase letter`);
            } else {
                dispatch(login(user))
            }
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