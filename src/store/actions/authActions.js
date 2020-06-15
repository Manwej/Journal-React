import axios from 'axios'
import jwt_decode from "jwt-decode";

export const registerUser = (newUser) => {
    return (dispatch) => {
      axios
        .post("http://localhost:5000/users/register", newUser)
        .then((res) => {
          console.log("response", res);
          if (res.status === 200) {
            dispatch({
              type: "SIGNUP_SUCCESS",
              payload: res.data,
            });
          }
        })
        .catch((error) => {
          console.log("error" + error.response);
          if (error.response) {
            if (error.response.status === 409) {
              alert("Sign up error");
            } else {
              alert("Please review your data");
            }
          }
        });
    };
  };
  
  export const login = (userData) => {
    return (dispatch) => {
      axios
        .post("http://localhost:5000/users/login", userData)
        .then((res) => {
          console.log("response", res.data.token);
          if (res.status === 200) {
            const token = res.data.token;
            console.log(token);
            localStorage.setItem("token", res.data.token);
            const decoded = jwt_decode(token);
            console.log(decoded);
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: decoded,
              token: res.data.token,
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 409) {
              alert("There has been an error. Please, try again");
            }
          }
        });
    };
  };
  
  export const loginGoogle = (token) => {
    return (dispatch) => {
      console.log(token);
      localStorage.setItem("token", token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: decoded,
        token: token,
      });
    };
  };
  
  export const logOut = () => {
    return (dispatch) => {
      axios.get("http://localhost:3000/");
      localStorage.removeItem("token");
      // localStorage.clear();
      dispatch({ type: "LOGOUT SUCCESS" });
    }}