import React , {Component} from "react"
import './App.css';

// Import the Header Components 
import Header from './components/Header'
import SignInHeader from './components/signInHeader'

//Signin Component
// >>Import Signin component here<<
import SignIn from "./components/SignIn";

// Import the Footer Components
import Footer from './components/Footer'

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      name: "",
      user: "",
      loggedIn: false,
      loginMessage: "",
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    // console.log(this.state)
    fetch(`http://localhost:3003/users/login/${this.state.username}/${this.state.password}`)
    .then(res => {
        if(res.status === 200) {
            return res.json();
        } else { 
          return []
        }
    })
    .then(data => {
      if(data.length === 0) {
        this.setState({
          loggedIn: false,
          loginMessage: "User not found."
        }) 
      } else {
        this.setState({
          user: data,
          loggedIn: true,
      })  
      }
        
    })
  }

  handleSignOut = (e) => {
    e.preventDefault()
    this.setState({
        loggedIn : false
    })
}

handleRegister = (e) => {
  e.preventDefault();
  fetch(`http://localhost:3003/users/`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res => res.json())
  .then(resJson => {
      if(!resJson._id) {
        console.log(resJson.error)
        this.setState({
          loginMessage: "Username is already taken.",
        })
      } else {
        // console.log("JSon", resJson)
        this.setState({
          username: "",
          password: "",
          name: "",
          user: resJson,
          loggedIn: true,
          register: false,
          loginMessage: "Account Created."
        })
      } 
      
  })
}

  render() {
    // if logged in is false
    return( !this.state.loggedIn
      ? <>
          <Header />
          <SignIn
            handleChange = {this.handleChange}
            handleLogin = {this.handleLogin}
            handleRegister = {this.handleRegister}
            />
            {/* For Testing Login/Register Message  */}
            <p>{this.state.loginMessage}</p>
          <Footer />
        </>
      : <>
        {/* If login successful change state.loggedIn to true */}
        {/* // Pass in User Component  */}
        <SignInHeader signOut={this.handleSignOut}/>
        <div>User Component</div>
        <Footer />
      </>
                                
    )
  }
}

export default App;
