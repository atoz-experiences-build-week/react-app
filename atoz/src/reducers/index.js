import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,

  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  LOGOUT_SUCCESS,

  FETCH_EXPERIENCES_START,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_ERROR ,

  POSTING_START,
  POSTING_SUCCESS,
  POSTING_ERROR,

  DELETE_START,
  DELETE_SUCCESS,
  USER_UNAUTHORIZED,

  EDIT_EXPERIENCE_START,
  EDIT_EXPERIENCE_SUCCESS,
  EDIT_EXPERIENCE_FAILURE
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

  loggedIn: false,

  fetchingExperiences: false,

   experiences: [],
   postingExperience: false,

   deletingExperience: false,
   deleteMessage: '',

   editingExperience: false
}


export const reducer = (state = initialState, action) => {
  switch(action.type){

    //REGISTER
    case REGISTER_START:
      return {
        ...state,
          error: null,
          registering: true,
          newUser: ''
     }

      case REGISTER_SUCCESS:
        return {
          ...state,
          error: null,
          registering: false,
          registerMessage: action.message,
          newUser: action.payload,
          loggedIn: true,
          loginMessage: ''
        }

        case REGISTER_ERROR:
          return {
            ...state,
            registering: false,
            error: action.payload,
            loggedIn: false,
            newUser: ''
          }

             //LOGIN 
    case LOGIN_START:
      return {
        ...state,
          error: null,
          isLoggingIn: true,
          loggedInUser: '',
          loggedIn: false,
     }

      case LOGIN_SUCCESS:
        return {
          ...state,
          error: null,
          isLoggingIn: false,
          loginMessage: action.message,
          loggedInUser: action.payload,
          loggedIn: true,
          logout: true,
          registerMessage: ''
        }

        case LOGIN_ERROR:
          return {
            ...state,
            isLoggingIn: false,
            error: action.payload,
            loggedInUser: '',
            loggedIn: false
          }

          //LOGOUT
          case LOGOUT_SUCCESS:
            return {
              ...state,
              registerMessage: '',
              loginMessage: '',
              loggedInUser: '',
              newUser: '',
              loggedIn: false,
            }



          //FETCHING EXPERIENCES

        case FETCH_EXPERIENCES_START:
          return {
            ...state,
            fetchingExperiences: true,
            error: null
          }

        case FETCH_EXPERIENCES_SUCCESS:
          return {
            ...state,
           fetchingExperiences: false,
            error: null,
            experiences: action.payload
          }

        case FETCH_EXPERIENCES_ERROR:
          return {
            ...state,
            fetchingExperiences: false,
            error: action.payload
          }

       
          
          //POSTING EXPERIENCES  

          case POSTING_START:
            return {
              ...state,
              postingExperience: true,
              error: null,
            }
          case POSTING_SUCCESS:
            return {
              ...state,
              postingExperience: false,
              error: null,
              experiences: action.payload,
              registerMessage: 'Your experience has been successfully added!',
              loginMessage: '',
            }
          case POSTING_ERROR:
            return {
              ...state,
              postingExperience: false,
              error: action.payload
            }
              
              //DELETING EXPERIENCE

            case DELETE_START:
              return {
                ...state,
                deletingExperience: true
              };
            case DELETE_SUCCESS:
              return {
                ...state,
                deletingExperience: false,
                error: '',
                //experiences: action.payload,
                //deleteMessage: action.message,
                registerMessage: action.message, //delete message
                loginMessage: '',
              };
              case USER_UNAUTHORIZED:
                console.log(action);
                return {
                  ...state,
                  error: action.payload.data.error,
                  errorStatusCode: action.payload.status,
                  fetchingFriends: false,
                  deleteMessage: ''
                };


                // EDIT EXPERIENCE
                
                case EDIT_EXPERIENCE_START:
                  return {
                    ...state,
                    editingExperience: true
                  };
                case EDIT_EXPERIENCE_SUCCESS:
                  return {
                    ...state,
                    editingExperience: false,
                    error: '',
                    experiences: action.payload,
                    registerMessage: '', //Edit message
                    loginMessage: '',
                  };
                case EDIT_EXPERIENCE_FAILURE:
                  return {
                    ...state,
                    editingExperience: false,
                    error: action.payload,
                  };

      default:
      return state
  }
}
