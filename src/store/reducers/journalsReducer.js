const initState ={
    journals:[],
    err: "",
    }
    const journalsReducer =(state = initState, action)=>{
        switch(action.type){
            case 'FETCH_JOURNAL':
                console.log('created Project:', action.payload)
                return {...state, journals: action.payload}
            case "FETCH_JOURNAL_ERROR":
                    console.log("FETCH_JOURNAL_ERROR", action);
                    return { ...state, err: action.payload };
            case "ADD_PAGE":
                    return {...state, journals: action.payload}
            default:
                    return state;
        }

       
    }
    
    export default journalsReducer