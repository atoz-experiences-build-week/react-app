import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// import Login from './components/Login'
// import Experiences from './components/Experiences'
// import PostExperience from './components/PostExperience'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
         <h1> A to Z experience app</h1>
         <div className="App">
        <ul className='navbar'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
        {/* <Route exact path='/login' component={Login} /> */}
        {/* <PrivateRoute
         exact path='/experiences'
         component={Experiences}
        />
       <Route
          exact path='/post'
          component={PostExperience}
        /> */}
      </div>
       
      </header>
    </div>
  );
}

export default App;
