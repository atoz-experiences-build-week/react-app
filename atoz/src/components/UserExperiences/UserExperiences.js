import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUserExperiences, login } from '../../actions/actions'
import {  Card, Button, CardHeader, CardFooter, CardBody} from 'reactstrap'
import './UserExperiences.css'



class UserExperiences extends Component {


componentDidMount() {
  console.log('AAAAAAAAAAAAAAAAAAAAAAAA', this.props.loggedInUser.id)
  if(this.props.loggedInUser) {
    this.props.getUserExperiences(this.props.loggedInUser.id)
  } else {
    this.props.getUserExperiences(99999999999)
  }
}

  render() {
    console.log('PROPS fro, USE EXPPPPPPPPPPP', this.props)
    console.log('LOGGGGGGED IN USER', this.props.loggedInUser)
    return (
      <div>
       {this.props.userExperiences.length < 0 ?  <h4>You haven't share any experiences yet. To share experience please click here!</h4>
       : this.props.userExperiences.map(exp => {
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
         )
       })
    
       }
    
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('STATE from USER EXP:', state)
  return {
    loggedInUser: state.loggedInUser,
    userExperiences: state.userExperiences
  }
}



export default withRouter (
 connect (
   mapStateToProps,
   { getUserExperiences, login }
 ) (UserExperiences)
)


//2 Problems
//1. when logged in user is an empty array - happens when signed up & loggedIn user message is empty

//2. when logged in user haven't done any posts yet - map goes over empty object

// conditionaly render , 
// {this.props.userExperiences === {} ? <h1>You haven't share any experinces yet. To share experience please click here!</h1> : this.props.userExperiences.map}