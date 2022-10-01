import React, {Component} from 'react'

//Import Bootstrap styling for form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//URL
let baseURL = process.env.REACT_APP_SERVER_URL;

class CreateForm extends Component {
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

 handleSubmit = (event) => {
    event.preventDefault()
    // added the route
    fetch(`${baseURL}/videos`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
      this.props.handleCreateReturn();
    }

render(){
  return(
    <div className="createPageHolder">
      <div className="returnBtn">
      <div type="button" value="Return" onClick={this.props.handleCreateReturn}>Return</div>
    </div>
  <div className="formCreateOuter">
    
    <h2 className="createFormHeader">Create Video Form</h2>
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
  </div>
     )}}

export default CreateForm
