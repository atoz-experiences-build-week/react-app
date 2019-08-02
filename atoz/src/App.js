import React from 'react'
import './App.css'
import { Route, Link, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import { register, login } from './actions/actions'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import {logout} from './actions/actions'
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home'
import PostExperience from './components/Forms/PostForm'
import UserExperiences from './components/UserExperiences/UserExperiences'


class App extends React.Component {


  logOut = e => {
    e.preventDefault()
    this.props.logout()
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  render() {
   return (
    <div className="App">
         <ul className='navbar'>
          <li>
          <i className="fas fa-city"></i>
            <Link to='/'>ATOZ</Link>
          </li>
          <li>
             {this.props.loggedIn ? 
             <div className="div">
             <Link to='/user-page'>My Experiences</Link>
              <button onClick={this.logOut} className="btn btm-sm btn-primary">Logout</button> 
             </div> : 
              <span>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Sign Up</Link>
              </span>
             }
          </li>
         
        </ul>
       <header className="App-header">
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route
         exact path='/'
         component={Home}
        />
        <PrivateRoute
         exact path='/dashboard'
         component={Dashboard}
        />
        <PrivateRoute
         exact path='/post'
         component={PostExperience}
        />
        <PrivateRoute
         exact path='/user-page'
         component={UserExperiences}
        />
      </header>
    </div>
  )
 }
}

const mapStateToProps = state => {
  // console.log('STATE from DASHBOARD:', state)
  return {
    loggedInUser: state.loggedInUser,
    newUser: state.newUser,
    loggedIn: state.loggedIn,
    logout: state.logout
  }
}

export default withRouter(
connect(
    mapStateToProps,
    { register, login, logout }
  )(App)
)


//IMPLEMENTING NAMES
        // {this.props.newUser &&
        //      <h4> {this.props.newUser.username}</h4>
        //     }
          
        //     {this.props.loggedInUser &&
        //       <h4>{this.props.loggedInUser.username}</h4>
        //     } 