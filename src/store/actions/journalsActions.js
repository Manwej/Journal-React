import axios from "axios";
export const fetchJournal=()=>{
    return (dispatch) => {
        fetch("http://localhost:5000/journalpage")
          .then(resp => {
            return resp.json();
          })
          .then((json) => {
            dispatch({ type: "FETCH_JOURNAL", payload: json });
          })
          .catch((err) => {
            dispatch({ type: "FETCH_JOURNAL_ERROR", payload: err });
          });
      };
}
export const createJournal=(project)=>{
    return (dispatch)=>{
        axios
        .post("http://localhost:5000/journalpage", project)
        .then((res) => {
          if (res.status === 200) {
            dispatch({
              type: "ADD_PAGE",
              payload: res.data,
            });
          }
        })
        .catch((error) => {
          console.log("error" + error.response);
        //   if (error.response) {
        //     if (error.response.status === 409) {
        //       alert("Sign up error");
        //     } else {
        //       alert("Please review your data");
        //     }
        //   }
        });
      }
    }
