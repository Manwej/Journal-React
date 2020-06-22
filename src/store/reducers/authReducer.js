const initState = {
  user: null,
  err: "",
  token: localStorage.getItem("token"),
  isLoggedIn: false,
  isLoading: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        isLoading: false,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
