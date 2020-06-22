import axios from "axios";
import jwt_decode from "jwt-decode";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: "USER_LOADING" });
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(token);
  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  axios
    .get("http://localhost:5000/users/user", config)
    .then((res) => {
      console.log("hello from userload");
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "AUTH_ERROR",
      });
    });
};

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
export const loginUser = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/users/login", userData)
      .then((res) => {
        if (res.status === 200) {
          const token = res.data.token;
          console.log(token);
          localStorage.setItem("token", res.data.token);
          const decoded = jwt_decode(token);
          console.log(decoded);
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data,
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

export const logOut = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/");
    localStorage.removeItem("token");
    // localStorage.clear();
    dispatch({ type: "LOGOUT SUCCESS" });
  };
};

// Setup config/headers and token
// export const tokenConfig = (getState: Function) => {
//   // Get token from localstorage
//   const token = getState().auth.token;

//   // Headers
//   const config: IConfigHeaders = {
//     headers: {
//       'Content-type': 'application/json'
//     }
//   };

//   // If token, add to headers
//   if (token) {
//     config.headers['x-auth-token'] = token;
//   }

//   return config;
// };
