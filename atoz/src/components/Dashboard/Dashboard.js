import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { register, login, getExperiences, postExperience, deleteExperience, updateExperience } from '../../actions/actions'
import UpdateForm  from '../Forms/UpdateForm'
import './Dashboard.css'
import {Jumbotron,  Alert,  Card, Button, CardHeader, CardFooter, CardBody} from 'reactstrap';
import { ClipLoader } from 'react-spinners'



class Dashboard extends React.Component {
  state = {
    deletingExperience: null,
    editingExperienceId: null,
    filteredExperiences: [],
    modal: false
  };

componentDidMount() {
  this.props.getExperiences()
}

deleteExperience = id => {
   this.props.deleteExperience(id).then(() => {
   this.setState({filteredExperiences: [], deletingExperienceId: id });
   this.props.getExperiences()
  })
}

editExperience = (e, experience) => {
   e.preventDefault();
   this.props.updateExperience(experience).then(() => {
   this.setState({filteredExperiences: [], editingExperienceId: null });
   this.props.getExperiences()
  })
}



  searchPostsHandler = e => {
    console.log(this.state)
    const exp = this.props.experiences.filter(curr => curr.title.includes(e.target.value));
    this.setState({ filteredExperiences: exp })
  };


  render() {
    if (this.props.fetchingExperiences) {
      return (
        <div className='sweet-loading'>
         <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
         />
      </div>
      );
    }
    return (
      <div className='dashboard'>

        <div className="jumbotron-container">
         <Jumbotron className='jumbotron'>
          <h1 className="display-3"><i className="fas fa-city home-logo"></i> Welcome to AtoZ</h1>
          <p className="lead">Explore the best AtoZ experiences in the world!</p>
          <hr className="my-2"/>

          <div className='cta-box'>
           <Button className='btn-share' color="primary"><Link to='/post'>Share Experience</Link></Button>
           <div className='search'>
             <input 
              id='search-input'
              name='search'
              placeholder='Search experiences'
              onChange={this.searchPostsHandler}
             />
             <i className="fas fa-search"></i>
           </div>
          </div>

          <div className="welcome-message">
           <Alert color="success">
             {this.props.registerMessage && this.props.registerMessage}
             {this.props.loginMessage && this.props.loginMessage}
           </Alert>
          </div>
         </Jumbotron>
        </div>

        <div className="experiences-wrapper">
          {this.state.filteredExperiences.length > 0 ? this.state.filteredExperiences.map(exp => {
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
                <Card>
                  <CardHeader tag="h4">{exp.title}</CardHeader>
                  <CardBody>
                     <p><strong>Location:</strong>{exp.location}</p>
                     <p><strong>Date:</strong>{exp.date}</p>
                     <p><strong>Price:</strong>{exp.price}</p>
                     <p><strong>Description:</strong>{exp.description}</p>
                  </CardBody>
                  <CardFooter className="text-muted">
                    <div className="card-footer">
                     <Button onClick={() => this.setState({ editingExperienceId: exp.id })}>Update</Button>
                     <Button  onClick={() => this.deleteExperience(exp.id)}>Delete</Button>
                    </div>
                  </CardFooter>
               </Card>
            </div>
           );
         })
        
        : this.props.experiences.map(exp => {
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
                <Card>
                  <CardHeader tag="h4">{exp.title}</CardHeader>
                  <CardBody>
                     <p><strong>Location:</strong>{exp.location}</p>
                     <p><strong>Date:</strong>{exp.date}</p>
                     <p><strong>Price:</strong>{exp.price}</p>
                     <p><strong>Description:</strong>{exp.description}</p>
                  </CardBody>
                  <CardFooter className="text-muted">
                    <div className="card-footer">
                     <Button onClick={() => this.setState({ editingExperienceId: exp.id })}>Update</Button>
                     <Button  onClick={() => this.deleteExperience(exp.id)}>Delete</Button>
                    </div>
                  </CardFooter>
               </Card>
              </div>
             );
            })
           } 
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