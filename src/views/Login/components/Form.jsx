import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../../features/user/userSlice";
import { toggleShowLogin } from "../../../features/view/viewSlice";

const Form = () => {
    const dispatch = useDispatch();

    const {
        loggedIn,
        errorMessage
    } = useSelector(store => store.user)

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
            dispatch(login(user));
            if (loggedIn) dispatch(toggleShowLogin());
            else setErrMessage(errorMessage);
        } else {
            const regex =  /^[a-zA-Z0-9]\w{6}/;
            if (user.password !== user.passwordCheck) {
                setErrMessage("Password does not match");
            } else if (!regex.test(user.password)) {
                setErrMessage(`Invalid password. \nPassword must be at least 6 characters. \nPassword must at least have one uppercase letter`);
            } else {
                // console.log("Register request sent.")
                dispatch(register(user))
                if (loggedIn) dispatch(toggleShowLogin());
                else setErrMessage(errorMessage);
            }
        }
    }

    const handleToggleRegister = () => {
        setViewLogin(!viewLogin)
    }

    useEffect( () => {
        setErrMessage(errorMessage)
        // eslint-disable-next-line
    }, [errorMessage])

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