import React from 'react'
import './App.css'
import { Route, Link, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import { register, login } from './actions/actions'

import Register from './components/Register'
import Login from './components/Login'
import {logout} from './actions/actions'
import Dashboard from './components/Dashboard';
import Home from './components/Home'
import PostExperience from './components/PostForm'



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
            <Link to='/'>Home</Link>
          </li>
          <li>
             {this.props.loggedIn ? 
             <div className="div">
             <button onClick={this.logOut}>Logout</button> 
             <button> <Link to='/post'>Post Experience</Link></button> 
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