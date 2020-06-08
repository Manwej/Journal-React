export const fetchJournal=(project)=>{
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
    
    
    
    // (dispatch, getState)=>{
    //     //make async call to database
    //     dispatch({type:'FETCH_JOURNAL', project})
    // }
}