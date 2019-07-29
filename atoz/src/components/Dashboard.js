import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { register, login, getExperiences, postExperience, deleteExperience, updateExperience } from '../actions/actions'
import UpdateForm  from './UpdateForm'



class Dashboard extends React.Component {
  state = {
    deletingExperience: null,
    editingExperienceId: null
  };

componentDidMount() {
  this.props.getExperiences()
}

deleteExperience = id => {
  this.setState({ deletingExperience: id });
  this.props.deleteExperience(id);
  this.props.getExperiences()
};

editExperience = (e, experience) => {
  e.preventDefault();
  this.props.updateExperience(experience).then(() => {
    this.setState({ editingExperienceId: null });
    this.props.getExperiences()
  });
};

  render() {
    if(this.props.fetchingExperiences) {
      return <h1>Loading...</h1>
    }
    return (
      <div className='dashboard'>
        <div className="welcome-message">
           {this.props.registerMessage && this.props.registerMessage}
          {this.props.loginMessage && this.props.loginMessage}
        </div>
        <div className="experiences-wrapper">
             


          {this.props.experiences.map(exp => {
            if(this.state.editingExperienceId === exp.id) {
            
            return (
              <div className="update-form" key={exp.id}>
                <UpdateForm
                  experience={exp}
                  updateExperience={this.editExperience}
                  editingExperience={this.props.editingExperience}
                />
              </div>
            );
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
                {this.props.deletingExperience &&
                this.state.deletingExperienceId === exp.id && (
                  {/* <p>Deleting Experience 👋</p> */}
                )}
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
    error: state.error,
    registerMessage: state.registerMessage,
    loginMessage: state.loginMessage,
    deleteMessage: state.deleteMessage,

    fetchingExperiences: state.fetchingExperiences,
    experiences: state.experiences,

    deletingExperience: state.deleteExperience,
    editingExperience: state.editExperience
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