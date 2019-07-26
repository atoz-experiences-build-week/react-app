// import React from 'react'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

// import { getUserById } from '../actions/actions'


// class User extends React.Component{


// componentDidMount() {
//   this.props.getUserById()
// }

//   render() {
//     return (
//       <div>
//        {this.props.error && this.props.error} 
//        {this.props.registerMessage && this.props.registerMessage} 

//         <h1>User by Id</h1>

//         {this.props.user.username}
        
//         {/* {this.props.users.map( user => {
//           return (
//             <div key={user.id}>
//              <h1>{user.username}</h1>
//            </div>
//           )
//         })} */}
       
//       </div>
//     );
//   };
// };

// const mapStateToProps = state => {
//   console.log('STATE from mapStateToProps:', state)
//   return {
//     fetchingUser: state.fetchingUser,
//     error: state.error,
//     registerMessage: state.message,
//     user: state.user
//   }
// }

// export default withRouter (
//   connect(
//     mapStateToProps,
//     { getUserById }
//   )(User)
// )


