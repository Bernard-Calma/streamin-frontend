import axios from 'axios';
import React, {useState} from 'react'

//Import Bootstrap styling for form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../../features/video/videoSlice';

const CreateForm = props => {
  const dispatch = useDispatch();
  const [newVideo, setNewVideo] = useState({
    videoLink: '',
      title: '',
      description: '',
      tags: '',
      user: props.user._id,
  })
 // Handle the change of each value
const handleChange = e => setNewVideo({...newVideo, [e.target.name]: e.target.value})

  return(
    <div className="createPageHolder">
      <h2 className="createFormHeader">Create Video</h2>
      <Form id="createForm" onSubmit={() => dispatch(addVideo(newVideo))}>
        {/* Title Input */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control 
            type="text"
            id="title" 
            name="title" 
            onChange={handleChange}
            value={newVideo.title}
            placeholder="Title" required/>
        </Form.Group>

        {/* videoLink input*/}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="videoLink">Video Link <span>(Currently works for : Youtube, Facebook, Vimeo, Dailymotion Links)</span></Form.Label>
          <Form.Control 
            id="url"
            type="url" 
            placeholder="Add your Video link" 
            name="videoLink" 
            onChange={handleChange}
            value={newVideo.videoLink}
            required
          />
        </Form.Group>

        {/* Description Textarea */}
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control 
              id="textarea"
              rows={3}
              name="description" 
              value={newVideo.description}
              onChange={handleChange}
              placeholder="Description"
              required/>
        </Form.Group>

        {/* Tag Dropdown/ Option */}
        {/* Testing how to do tags */}
        
        {/* <Form.Group className="mb-3">
          <Form.Label htmlFor="tags">Tags</Form.Label>
          <Form.Select aria-label="Tags"
          id="tags"
          onChange={handleChange}
          value={tags} name="tags">
            <option>Select your Tag </option>
            <option value="Test-1">Test 1</option>
            <option value="Test-2">Test 2</option>
            <option value="Test-3">Test 3</option>
          </Form.Select>
        </Form.Group> */}

        <Form.Group className="mb-3">
          <Button variant="primary" id="createVideoBtn" type="submit" >
            Submit
          </Button>
        </Form.Group>
      </Form> 
    </div>
  )
}

export default CreateForm
