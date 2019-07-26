import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { register, login } from '../actions/actions'


class Dashboard extends React.Component{

  logout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  render() {
    console.log('ggggggggggggggggg', this.props)
    if(this.props.registering) {
      return <h1>Singing Up...</h1>
    }
    return (
      <div className='dashboard'>
       {this.props.error && this.props.error} 

       {this.props.registerMessage && this.props.registerMessage} 

       {this.props.loginMessage && this.props.loginMessage} 

        {this.props.newUser &&  
        <h4>{this.props.newUser.username}</h4> 
        }
      
        {this.props.loggedInUser && 
          <h4>{this.props.loggedInUser.username}</h4>
        }
         <li>
          <button className='logout' onClick={this.logout}>Logout</button>
        </li>
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log('STATE from DASHBOARD:', state)
  return {
    error: state.error,
    registering: state.registering,

    registerMessage: state.registerMessage,
    loginMessage: state.loginMessage,

    newUser: state.newUser,
    loggedInUser: state.loggedInUser
  }
}

export default withRouter (
  connect(
    mapStateToProps,
    { register, login }
  )(Dashboard)
)


