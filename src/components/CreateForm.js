import React, {Component} from 'react'

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
        <form onSubmit = {this.handleSubmit}>
             <label htmlFor="videoLink">Video </label>
             {/* videoLink input*/}
                <input 
                    type="text" 
                    id="videoLink" 
                    name="videoLink" 
                    onChange={this.handleChange}
                    value={this.state.videoLink}
                    placeholder="Add a Video"
                />
                {/* Title Input */}
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="Title"
                />
                {/* Description Textarea */}
                <label htmlFor="description">Description: </label>
                <textarea
                id="description"
                name = "description"
                // onChange={this.handleChange}
                value={this.state.description}
                onChange={this.handleChange}>
                </textarea>
                {/* Tag Dropdown/ Option */}
                {/* Testing how to do tags */}
                <label htmlFor="tags">Tags: </label>
                <select id="tags"
                 onChange={this.handleChange}
                 value={this.state.tags} name="tags">
                <option value="Test1">Test 1</option>
                <option value="Test2">Test 2</option>
                <option value="Test3">Test 3</option>
                </select>

                {/* Submit  */}
                <input type="submit" value="Submit your viedo" />
        </form>
    )
    }
}

export default CreateForm
