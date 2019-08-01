import React from 'react'
//import Loader from "react-loader-spinner"
import { connect } from 'react-redux'
import { postExperience } from '../../actions/actions'
import {  Form, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Post.css'

class PostExperience extends React.Component {
  state = { 
      user_id: "",
      title: "",
      date: "",
      location: "",
      price: "",
      description: ""
    }
  

    handleChange = e => {
      e.preventDefault()
      this.setState({ [e.target.name]: e.target.value })
    }
  
  
    postExperienceHandler = (e)=> {
      e.preventDefault()
      const {user_id, title, date, location, price, description} = this.state
      this.props.postExperience({ user_id, title, date, location, price, description})
      this.setState({   
        user_id: "",
        title: "",
        date: "",
        location: "",
        price: "",
        description: "" 
      });
      this.props.history.push('/dashboard')
    }


render() {
  console.log('PROPS of POST COMPONENT', this.props)
  return (
   <div className='login-form'>
    
    {this.props.error && this.props.error} 

    <h1>Let's add an experience!</h1>

    <Form className='post-form' onSubmit={this.postExperienceHandler}>
      <Input
        type='text'
        name='title'
        placeholder='Title'
        value={this.state.title}
        onChange={this.handleChange}
      />
      <Input
        type='number'
        name='user_id'
        placeholder='User Id'
        value={this.state.user_id}
        onChange={this.handleChange}
      />
      <Input
        type='date'
        name='date'
        placeholder='Date'
        value={this.state.date}
        onChange={this.handleChange}
      />
      <Input
        type='text'
        name='location'
        placeholder='Location'
        value={this.state.location}
        onChange={this.handleChange}
      />
      <Input
        type='number'
        name='price'
        placeholder='Price'
        value={this.state.price}
        onChange={this.handleChange}
      />
      <Input
        type='textarea'
        name='description'
        placeholder='Description'
        value={this.state.description}
        onChange={this.handleChange}
      />
    
       <button className='btn-post btn btn-primary'>
        {/* {this.props.postingExperience ? (
          <Loader 
          type="ThreeDots" 
          color="#1f2a38" 
          height="12" 
          width="26" /> ) : ( 'Add Experience' )} */}
          {this.props.isLoggingIn ? 'Loading' : 'Share'}
       </button>
       <p><Link to='/dashboard'>Go back</Link></p>
    </Form>
   </div>
   )
  }
}

const mapStateToProps = state => {
  console.log('STATE from POST mapStateToProps:', state)
  return {
    postingExperience: state.postingExperience,
    error: state.error,
  }
}

export default connect(
  mapStateToProps,
  { postExperience }
)(PostExperience)

