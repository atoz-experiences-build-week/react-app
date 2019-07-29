import React from 'react'
import Loader from "react-loader-spinner"
import { connect } from 'react-redux'
import { postExperience } from '../actions/actions';

class PostExperience extends React.Component {
  state = { 
      title: "",
      date: "",
      location: "",
      price: "",
      description: ""
    }
  

    handleChange = e => {
      e.preventDefault()
      this.setState({ [e.target.name]: e.target.value })
    }
  
  
    postExperienceHandler = (e)=> {
      e.preventDefault()
      const {title, date, location, price, description} = this.state
      this.props.postExperience({ title, date, location, price, description})
      this.setState({   
        title: "",
        date: "",
        location: "",
        price: "",
        description: "" 
      });
      this.props.history.push('/dashboard')
    }


render() {
  console.log('PROPS of POST COMPONENT', this.props)
  return (
   <div className='login-form'>
    
    {this.props.error && this.props.error} 

    <h1>Let's add an experience!</h1>

    <form onSubmit={this.postExperienceHandler}>
      <input
        type='text'
        name='title'
        placeholder='Title'
        value={this.state.title}
        onChange={this.handleChange}
      />
      <input
        type='date'
        name='date'
        placeholder='Date'
        value={this.state.date}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='location'
        placeholder='Location'
        value={this.state.location}
        onChange={this.handleChange}
      />
      <input
        type='number'
        name='price'
        placeholder='Price'
        value={this.state.price}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='description'
        placeholder='Description'
        value={this.state.description}
        onChange={this.handleChange}
      />
    
       <button>
        {this.props.postingExperience ? (
          <Loader 
          type="ThreeDots" 
          color="#1f2a38" 
          height="12" 
          width="26" /> ) : ( 'Add Experience' )}
          {/* {this.props.isLoggingIn ? 'Loading' : 'Login'} */}
       </button>

    </form>
   </div>
   )
  }
}

const mapStateToProps = state => {
  console.log('STATE from POST mapStateToProps:', state)
  return {
    postingExperience: state.postingExperience,
    error: state.error,
  }
}

export default connect(
  mapStateToProps,
  { postExperience }
)(PostExperience)

