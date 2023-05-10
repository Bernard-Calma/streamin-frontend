import React, { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = () => {
        
    }

    return(
        <form    
        //     onSubmit={this.props.handleLogin}
        >  
            <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                // onChange={this.props.handleChange}
                value={user.username}
                required
                autoComplete="false"
            />
            <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                // onChange={this.props.handleChange}
                value={user.password}
                required
                autoComplete="false"
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