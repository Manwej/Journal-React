const initState ={
    user: null,
    err: "",
    token: "",
    isLoggedIn: false
    }
    const authReducer =(state = initState, action)=>{
        switch(action.type){
            case "SIGNUP_SUCCESS":
                return {...state, user: action.payload, isLoggedIn: true}
            case "SIGNUP_FAILURE":
                return{...state, err: action.payload}
            case "LOGIN_SUCCESS":
                return {
                     ...state,
                      token: action.token,
                      user: action.payload,
                      isLoggedIn: true,
                    };
            case "LOGOUT_SUCCESS":
                return {
                      ...state,
                      isLoggedIn: false,
                      token: null,
                      user: null,
                    };
            default:
                return state;
        }
    }
    
    export default authReducer