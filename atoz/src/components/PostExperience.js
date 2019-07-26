import React from 'react'
import Loader from "react-loader-spinner"
import { connect } from 'react-redux'
import { postExperience } from '../actions/actions';

class Register extends React.Component {
  state = {
    experience: {
      title: "",
      date: "",
      location: "",
      price: "",
      description: ""
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.experience,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
      this.props.postExperience(this.state.experience).then(() => {
      this.props.history.push('/dashboard');
    });
  };


render() {
  return (
   <div className='login-form'>
    
    {this.props.error && this.props.error} 

    <form onSubmit={this.register}>
      <input
        type='text'
        name='title'
        placeholder='Username'
        value={this.state.credentials.username}
        onChange={this.handleChange}
      />
      <input
        type='date'
        name='date'
        placeholder='Password'
        value={this.state.credentials.password}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='location'
        placeholder='First Name'
        value={this.state.credentials.first_name}
        onChange={this.handleChange}
      />
      <input
        type='number'
        name='price'
        placeholder='Last Name'
        value={this.state.credentials.last_name}
        onChange={this.handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={this.state.credentials.email}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='description'
        placeholder='City'
        value={this.state.credentials.city}
        onChange={this.handleChange}
      />
      
       <button>
        {this.props.isLoggingIn ? (
          <Loader 
          type="ThreeDots" 
          color="#1f2a38" 
          height="12" 
          width="26" /> ) : ( "Sign Up" )}
          {/* {this.props.isLoggingIn ? 'Loading' : 'Login'} */}
       </button>

    </form>
   </div>
   )
  }
}

const mapStateToProps = state => {
  console.log('STATE from mapStateToProps:', state)
  return {
    postingExperience: state.postExperience,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { postExperience }
)(Register)

