import React, {Component} from 'react'
//Import Bootstrap styling for form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class CreateForm extends Component {
 constructor(props){
    super(props)
    this.state= {
        videoLink: '',
        title: '',
        description: '',
        tags: '',

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
    fetch('http://localhost:3003/videos', {
            method: 'POST',
            body: JSON.stringify({
                videoLink: this.state.videoLink,
                title: this.state.title,
                description: this.state.description,
                tags:this.state.tags
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(resJson => {
            console.log('CreateForm - resJson', resJson)
            // need to add HandleAddVideo Function to pass into this form
            this.props.handleAddVideos(resJson)
            this.setState({ videoLink: '',
            title: '',
            description: '',
            tags: '',})
        })
    }

render(){
    return(
        <div className="container formContainer">

            <h2 className="createFormHeader">Create Video Form</h2>
            <Form id="createForm">
                {/* videoLink input*/}
            <Form.Group className="mb-3" controlId="videoLink">
                <Form.Label htmlFor="videoLink">Video Link</Form.Label>
                <Form.Control type="text" placeholder="Add your Video link" 
                name="videoLink" 
                onChange={this.handleChange}
                value={this.state.videoLink}
                />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
        {/* Title Input */}
      <Form.Group className="mb-3" controlId="title">
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
      <Form.Group className="mb-3" controlId="description">
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
         <Button variant="primary" className="createVideoBtn" type="submit">
        Submit Your Video
      </Button>
    </Form.Group>
     
    </Form> 
        </div>
        
    )
    }
}

export default CreateForm
