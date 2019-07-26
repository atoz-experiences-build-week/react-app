import React from 'react'
import Loader from "react-loader-spinner"
import { connect } from 'react-redux'
import { register } from '../actions/actions';

class Register extends React.Component {
  state = {
    credentials: {
      username:'',
      password: '',
      "first_name": '',
      "last_name":'',
      email: '',
      city: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
      this.props.register(this.state.credentials).then(() => {
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
        name='username'
        placeholder='Username'
        value={this.state.credentials.username}
        onChange={this.handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={this.state.credentials.password}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='first_name'
        placeholder='First Name'
        value={this.state.credentials.first_name}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='last_name'
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
        name='city'
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
    registering: state.registering,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { register }
)(Register)

