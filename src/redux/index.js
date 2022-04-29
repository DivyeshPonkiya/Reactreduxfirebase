import { combineReducers } from 'redux';
import { addUserdataReducer } from './addUserdata';

export default combineReducers({
    addUserdata: addUserdataReducer,
});
