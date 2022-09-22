import React, {Component} from 'react'
import SignIn from './components/SignIn-Register';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [{
        name: 'Bill',
        password: 'Bo'
      }]
    }
  }

  render() {
    return(
      <div>
        <SignIn  users={this.state.users}/>
      </div>
    )
  }
}

export default App;
