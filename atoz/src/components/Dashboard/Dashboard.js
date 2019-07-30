import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { register, login, getExperiences, postExperience, deleteExperience, updateExperience } from '../../actions/actions'
import UpdateForm  from '../Forms/UpdateForm'
import './Dashboard.css'

import { Jumbotron, Button, Alert } from 'reactstrap';



class Dashboard extends React.Component {
  state = {
    deletingExperience: null,
    editingExperienceId: null
  };

componentDidMount() {
  this.props.getExperiences()
}

deleteExperience = id => {
  this.setState({ deletingExperienceId: id });
  this.props.deleteExperience(id)
  this.props.getExperiences()
}

editExperience = (e, experience) => {
  e.preventDefault();
  this.props.updateExperience(experience).then(() => {
  this.setState({ editingExperienceId: null });
  this.props.getExperiences()
  })
}


  render() {
    if (this.props.fetchingExperiences) {
      return (
        <div className="experiences" style={{ paddingTop: '36px' }}>
          <Loader type="Puff" color="#ffffff" height="100" width="100" />
        </div>
      );
    }
 
    return (
      <div className='dashboard'>

        <div className="jumbotron-container">
         <Jumbotron className='jumbotron'>
          <h1 className="display-3">Welcome to A to Z</h1>
          <p className="lead">Explore the best AtoZ experiences in the world!</p>
          <hr className="my-2" />
          <p className="lead">
          <Button className='btn-share' color="primary"><Link to='/post'>Share Experience</Link></Button>
          </p>
          <div className="welcome-message">
           <Alert color="success">
             {this.props.registerMessage && this.props.registerMessage}
             {this.props.loginMessage && this.props.loginMessage}
           </Alert>
          </div>
         </Jumbotron>
        </div>
        <div className="experiences-wrapper">

          {this.props.experiences.map(exp => {

            if(this.state.editingExperienceId === exp.id) {
            return (
              <div className="update-form" key={exp.id}>
                <UpdateForm
                  experience={exp}
                  editExperience={this.editExperience}
                  editingExperience={this.props.editingExperience}
                />
              </div>
            )
          }
           
          return (
            <div className="experiences-card" key={exp.id}>
              <i
                className="fas fa-pencil-alt"
                onClick={() => this.setState({ editingExperienceId: exp.id })}
              />                               
              <i
                className="fas fa-times"
                onClick={() => this.deleteExperience(exp.id)}
              />
                <h4>{exp.title}</h4>
                <p>{exp.location}</p>
                <p>{exp.date}</p>
                <p>{exp.price}</p>
                <p>{exp.description}</p>
                {/* {this.props.deletingExperience &&
                this.state.deletingExperienceId === exp.id && (
                  <p>Deleting Experience x</p>
                )} */}
            </div>
          );
        })} 



          </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log('STATE from DASHBOARD:', state)
  return {
    registerMessage: state.registerMessage,
    loginMessage: state.loginMessage,

    fetchingExperiences: state.fetchingExperiences,
    experiences: state.experiences,

    postingExperience: state.postExperience,
    error: state.error,

    deletingExperience: state.deletingExperience,
    deleteMessage: state.deleteMessage,

    editingExperience: state.editingExperience
  }
}

export default withRouter (
  connect(
    mapStateToProps,
    { register, login, getExperiences, postExperience, deleteExperience, updateExperience  }
  )(Dashboard)
)


//Delete problem solving
//1.Make second get request and replace the data with new data 
//Or 
//2.Set state and replace state via function