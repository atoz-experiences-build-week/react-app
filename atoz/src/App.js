import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Register from './components/Register'
import Login from './components/Login'
// import Experiences from './components/Experiences'
// import PostExperience from './components/PostExperience'
import Users from './components/Users'
import User from './components/Users'
import Dashboard from './components/Dashboard';
import Home from './components/Home'


class App extends React.Component {

  render() {
   return (
    <div className="App">

         <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>

        </ul>

       <header className="App-header">
        <h1> Welcome to AtoZ experiences!  </h1>
      
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
         exact path='/user'
         component={User}
        />
      
       <PrivateRoute
         exact path='/users'
         component={Users}
        /> 
      </header>
    </div>
  )
 }
}

export default App;
