import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { register, login, postExperience } from '../actions/actions'


class Dashboard extends React.Component{

  logout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  render() {

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
         
          <button> <Link to='/post'>Post Experience</Link></button>
          <button className='logout' onClick={this.logout}>Logout</button>


          {this.props.experiences.map(exp=> {
            return (
              <div key={exp.id}>
                   {exp.title}
                 </div>
              )
         
            })} 


        
      </div>
    );
  };
};

const mapStateToProps = state => {
  // console.log('STATE from DASHBOARD:', state)
  return {
    error: state.error,
    registering: state.registering,

    registerMessage: state.registerMessage,
    loginMessage: state.loginMessage,

    newUser: state.newUser,
    loggedInUser: state.loggedInUser,

    experiences: state.experiences
  }
}

export default withRouter (
  connect(
    mapStateToProps,
    { register, login, postExperience }
  )(Dashboard)
)


