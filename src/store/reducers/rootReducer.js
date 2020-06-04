import authReducer from './authReducer'
import projectReducer from './projectReducer'

import {combinedReducers} from 'redux'


const rootReducer =combinedReducers(
    {
        auth: authReducer,
        project: projectReducer
    }
)


export default rootReducer