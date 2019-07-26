import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,

  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR ,

  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR ,

  // POSTING_START,
  // POSTING_SUCCESS,
  // POSTING_ERROR,

  // DELETE_START,
  // DELETE_SUCCESS,
  // USER_UNAUTHORIZED,

  // EDIT_FRIEND_START,
  // EDIT_FRIEND_SUCCESS,
} from "../actions/actions";



const initialState = {
  newUser: [],
  loggedInUser: [],
  users: [],
  user:[],
  registering: false,
  registerMessage: null,
  loginMessage: null,
  error: null,
  isLoggingIn: false,

  fetchingUsers: false,
  fetchingUser: false,

   experiences: [],
   postingExperience: false,

  // deletingExperience: false,
  // errorStatusCode: null,
  // editingFriend: false,
}


export const reducer = (state = initialState, action) => {
  switch(action.type){

    //REGISTER
    case REGISTER_START:
      return {
        ...state,
          error: null,
          registering: true
     }

      case REGISTER_SUCCESS:
        return {
          ...state,
          error: null,
          registering: false,
          registerMessage: action.message,
          newUser: action.payload
        }

        case REGISTER_ERROR:
          return {
            ...state,
            registering: false,
            error: action.payload
          }

             //LOGIN 
    case LOGIN_START:
      return {
        ...state,
          error: null,
          isLoggingIn: true
     }

      case LOGIN_SUCCESS:
        return {
          ...state,
          error: null,
          isLoggingIn: false,
          loginMessage: action.message,
          loggedInUser: action.payload
        }

        case LOGIN_ERROR:
          return {
            ...state,
            isLoggingIn: false,
            error: action.payload
          }

          //FETCHING USERS

        case FETCH_USERS_START:
          return {
            ...state,
            fetchingUsers: true,
            error: null
          }

        case FETCH_USERS_SUCCESS:
          return {
            ...state,
            fetchingUsers: false,
            error: null,
            users: action.payload
          }

        case FETCH_USERS_ERROR:
          return {
            ...state,
            fetchingUsers: false,
            error: 'Something wrong with friends😵!'
          }

          //FETCHING USER BY ID

        case FETCH_USER_START:
          return {
            ...state,
            fetchingUser: true,
            error: null
          }

        case FETCH_USER_SUCCESS:
          return {
            ...state,
            fetchingUser: false,
            error: null,
            user: action.payload
          }

        case FETCH_USER_ERROR:
          return {
            ...state,
            fetchingUser: false,
            error: 'Something wrong with friends😵!'
          }

          
          //POSTING EXPERIENCES  

          case POSTING_START:
            return {
              ...state,
              postingFriend: true,
              error: null,
            }
          case POSTING_SUCCESS:
            return {
              ...state,
              friends: action.payload,
              postingFriend: false,
              error: null
            }
          case POSTING_ERROR:
            return {
              ...state,
              postingFriend: false,
              error: action.payload.status
            }
              
        //      //DELETING EXPERIENCE

        //     case DELETE_START:
        //       return {
        //         ...state,
        //         deletingExperience: true
        //       };
        //     case DELETE_SUCCESS:
        //       return {
        //         ...state,
        //         deletingExperience: false,
        //         error: '',
        //         errorStatusCode: null,
        //         friends: action.payload
        //       };
        //       case USER_UNAUTHORIZED:
        //         console.log(action);
        //         return {
        //           ...state,
        //           error: action.payload.data.error,
        //           errorStatusCode: action.payload.status,
        //           fetchingFriends: false
        //         };


        //         //EDIT EXPERIENCE
                
        //         case EDIT_EXPERIENCE_START:
        //           return {
        //             ...state,
        //             editingFriend: true
        //           };
        //         case EDIT_EXPERIENCE_SUCCESS:
        //           return {
        //             ...state,
        //             editingFriend: false,
        //             error: '',
        //             errorStatusCode: null,
        //             friends: action.payload
        //           };

      default:
      return state
  }
}
