import React, { useState } from "react";

const Form = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => setUser({...user, [e.target.name]: e.target.value})
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        props.handleChangeUser(user)
    }

    return(
        <form    
            onSubmit={handleSubmit}
        >  
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

            <button>Log in</button>

            <div>
            <p className="registerLink"> Want to join? Register 
                <span 
                    id="registerPageLink" 
                    // onClick={this.props.onClickRegister}
                > here.
                </span>
            </p>
            </div>
        </form>
    )
}

export default Form;