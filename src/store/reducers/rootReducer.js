import authReducer from './authReducer'
import journalsReducer from './journalsReducer'
import {combineReducers} from 'redux'
const rootReducer =combineReducers({
        auth: authReducer,
        journals: journalsReducer
    });
export default rootReducer