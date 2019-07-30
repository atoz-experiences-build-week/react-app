import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
    <div id="landing-header">
 		<h1>Welcome to A to Z experiences</h1>
		  <div className="home-buttons">
       <button className="btn btn-lg btn-info"><Link to='/login'>Log In</Link></button>
       <button className="btn btn-lg btn-info"><Link to='/register'>Sign Up</Link></button>
     </div>
    </div>
    
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </div>
  );
};

export default Home;


