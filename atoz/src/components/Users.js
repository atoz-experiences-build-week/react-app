import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getUsers } from '../actions/actions'


class Users extends React.Component{


componentDidMount() {
  this.props.getUsers()
}

  render() {
    return (
      <div>
       {this.props.error && this.props.error} 
       {this.props.registerMessage && this.props.registerMessage} 
        <h1>Users</h1>
        
        {this.props.users.map( user => {
          return (
            <div key={user.id}>
             <h1>{user.username}</h1>
           </div>
          )
        })}
       
       

      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log('STATE from mapStateToProps:', state)
  return {
    fetchingUsers: state.fetchingUsers,
    error: state.error,
    registerMessage: state.message,
    users: state.users
  }
}

export default withRouter (
  connect(
    mapStateToProps,
    { getUsers }
  )(Users)
)


