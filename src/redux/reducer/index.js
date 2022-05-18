import {combineReducers} from 'redux';
import authReducer from './authReducer';
import utilReducer from './utilsReducer';

export default combinedReducer = combineReducers({
    auth: authReducer,
    util: utilReducer
});
