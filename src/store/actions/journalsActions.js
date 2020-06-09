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
    return (dispatch)=>{
        fetch("http://localhost:5000/journalpage", {
            method: 'POST',
        })
          .then(resp => {
           console.log(project)
            return resp.json()})
      }
    }
