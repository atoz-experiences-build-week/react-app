import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
         <ul className='navbar'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          OR
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>
        </ul>
    </div>
  );
}

export default App;
