import React from 'react'
import Loader from "react-loader-spinner"
import { connect } from 'react-redux'
import { login } from '../actions/actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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

  login = e => {
    e.preventDefault();
      this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/dashboard');
    });
  };


render() {
  return (
   <div className='login-form'>
    {this.props.error && this.props.error} 

    <form onSubmit={this.login}>
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
      
       <button>
        {this.props.isLoggingIn ? (
          <Loader 
          type="ThreeDots" 
          color="#1f2a38" 
          height="12" 
          width="26" /> ) : ( "Log in" )}
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
    isLoggingIn: state.isLoggingIn,
    error: state.error,
    loggedInUser: state.loggedInUser,
    loginMessage: state.loginMessage
  }
}

export default connect(
  mapStateToProps,
  { login }
)(Login)

