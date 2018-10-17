import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { duckReducer } from '../duckStore';

export default combineReducers({
    form: reducer,
    duckReducer,

});