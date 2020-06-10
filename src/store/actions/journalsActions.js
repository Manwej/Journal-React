import axios from "axios";
export const fetchJournal=()=>{
    return (dispatch) => {
        fetch("http://localhost:5000/journalpage", {
            mode: 'cors',
        })
          .then(resp => {
            console.log("hello from journalsActions")
            console.log(resp.json())
            return resp.json();
          })
          .then((json) => {
            console.log("hello from journalsActions")
            dispatch({ type: "FETCH_JOURNAL", payload: json });
          })
          .catch((err) => {
              console.log("hello 2")
            dispatch({ type: "FETCH_JOURNAL_ERROR", payload: err });
          });
      };
}
export const createJournal=(project)=>{
    console.log("helliii")
    return (dispatch)=>{
        axios
        .post("http://localhost:5000/journalpage", project)
        .then((res) => {
          console.log("helliooo");
          if (res.status === 200) {
            dispatch({
              type: "ADD_PAGE",
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




        // fetch("http://localhost:5000/journalpage", {
        //     method: 'post',
        //     body: JSON.stringify(project)
        // })
        //   .then(resp => {
        //     console.log("hello from create")

        //     return resp.json()
        // }).then(json=>{
        //     console.log("hello from create")
        //     dispatch({type:"ADD_PAGE", payload:  json})
        // })
      }
    }
