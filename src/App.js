import React , {Component} from "react"
import './App.css';

// Import the Header Components 
import Header from './components/Header'
import SignInHeader from './components/signInHeader'

//Signin Component
// >>Import Signin component here<<
import SignIn from "./components/signin-register";

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
      user: "",
      loggedIn: false,
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
        this.setState({
            user: data,
            loggedIn: true,
        })  
    })
  }

  render() {
    // if logged in is false
    return( !this.state.loggedIn
      ? <>
          <Header />
          <SignIn handleChange = {this.handleChange} handleLogin = {this.handleLogin}/>
          <Footer />
        </>
      : <>
        {/* If login successful change state.loggedIn to true */}
        {/* // Pass in User Component  */}
        <SignInHeader />
        <div>User Component</div>
        
        <Footer />
      </>
                                
    )
  }
}

export default App;
