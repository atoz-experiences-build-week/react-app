import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      {/* <Jumbotron fluid>
        <Container fluid>
          <div className="App">
             <h1 className="display-3"> Welcome to AtoZ experiences!</h1>
             <p className="lead">Please sign in or sign up if you are a new user!</p>
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
          
        </Container>
      </Jumbotron> */}
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


