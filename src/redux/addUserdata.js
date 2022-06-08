import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  addUserdataRequest: ['payload'],
  addUserdataSuccess: ['data'],
  addUserdataFailure: ['error'],
  getUserdataRequest: [''],
  getUserdataSuccess: ['data'],
  getUserdataFailure: ['error'],
});

export const AddUserDataTypes = Types;
const AddUserdataActions = Creators;

export default AddUserdataActions;
/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  data: [],
  offset: 0,
  has_more_data: false,
});

/* ------------- Selectors ------------ */
export const AddUserdataSelectors = {
  getdata: state => state.addUserdata.data,
  offset: state => state.addUserdata.offset,
  has_more_data: state => state.addUserdata.has_more_data,
  fetching: state => state.addUserdata.fetching,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => {
  return state.merge({
    fetching: true,
    error: null,
  });
};

// successful api lookup
export const success = (state, action) => {
  return state.merge({
    fetching: false,
    error: false,
  });
};

export const getusersuccess = (state, action) => {
  const {data} = action;
console.log("data",data)
  return state.merge({
    fetching: false,
    error: false,
    getdata: data,
  });
};

export const clearFilter = state => {
  return state.merge({
    data: {rows: []},
  });
};

// Something went wrong somewhere.
const failure = (state, action) => {
  const {error} = action;

  return state.merge({
    fetching: false,
    error,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const addUserdataReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_USERDATA_REQUEST]: request,
  [Types.ADD_USERDATA_SUCCESS]: success,
  [Types.ADD_USERDATA_FAILURE]: failure,
  [Types.GET_USERDATA_REQUEST]: request,
  [Types.GET_USERDATA_SUCCESS]: getusersuccess,
  [Types.GET_USERDATA_FAILURE]: failure,
});
