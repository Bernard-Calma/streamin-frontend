import React, {Component} from 'react'

//Import Bootstrap styling for form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//URL
let baseURL = process.env.REACT_APP_SERVER_URL;

class ModifyForm extends Component {
 constructor(props){
    super(props)
    this.state= {
        videoLink: '',
        title: '',
        description: '',
        tags: '',
        user: props.user,
    }
 }
 // Handle the change of each value
 handleChange = (event) => {
    const target= event.target
    const name = target.name
    this.setState({
        [name]: target.value,
    })
 }
 // Call to submit the form must place it in the App.js 
 handleSubmit = (event) => {
    // will not restart the page when you click submit
    event.preventDefault()
    // added the route
    fetch(`${baseURL}/videos`, {
            method: 'POST',
            body: JSON.stringify({
                videoLink: this.state.videoLink,
                title: this.state.title,
                description: this.state.description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
      this.props.handleCreateReturn();
    }

getVideo = () => {
    fetch(`${baseURL}/videos/${this.props.videoToModify}`)
    .then(res => {
        if(res.status === 200) return res.json()
        return ""
    })
    .then(data => {
        // console.log(data);
        if(data) this.setState({
            videoLink: data.videoLink,
            title: data.title,
            description: data.description,
            tags: data.tags,
        })
    })
}

componentDidMount(){
    this.getVideo();
}

handleSubmit = (event) => {
    event.preventDefault()
    // added the route
    fetch(`${baseURL}/videos/${this.props.videoToModify}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //using same function as createForm, work the same no need to change :)
      this.props.handleCreateReturn();
    }

render(){
  return(
  <div className="container formContainer">
    <div className="returnBtn">
      <input type="button" value="Return" onClick={this.props.handleCreateReturn}/>
    </div>
    <h2 className="createFormHeader">Modify Video</h2>
    <Form id="createForm" onSubmit={this.handleSubmit}>
      {/* videoLink input*/}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="videoLink">Video Link</Form.Label>
          <Form.Control 
            type="url" 
            placeholder="Add your Video link" 
            name="videoLink" 
            onChange={this.handleChange}
            value={this.state.videoLink}
          />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      {/* Title Input */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control 
          type="text"
          id="title" 
          name="title" 
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="Title" />
      </Form.Group>

      {/* Description Textarea */}
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control 
              as="textarea" rows={3}
              name="description" 
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description" />
      </Form.Group>

      {/* Tag Dropdown/ Option */}
      {/* Testing how to do tags */}
      <Form.Group className="mb-3">
        <Form.Select aria-label="Tags"
        id="tags"
        onChange={this.handleChange}
        value={this.state.tags} name="tags">
          <option>Select your Tag </option>
          <option value="Test-1">Test 1</option>
          <option value="Test-2">Test 2</option>
          <option value="Test-3">Test 3</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Button variant="primary" className="createVideoBtn" type="submit" >
          Submit Your Video
        </Button>
      </Form.Group>
    </Form>   
  </div>
     )}}

export default ModifyForm
