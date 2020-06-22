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
  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  axios
    .get("http://localhost:5000/users/user", config)
    .then((res) => {
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
          localStorage.setItem("token", res.data.token);
          const decoded = jwt_decode(token);
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data,
            token: res.data.token,
            decoded: decoded,
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

export const logOut = (userData) => {
  return (dispatch) => {
    axios.get("http://localhost:5000/users/logout", userData);
    localStorage.removeItem("token");
    // localStorage.clear();
    dispatch({ type: "LOGOUT_SUCCESS" });
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
