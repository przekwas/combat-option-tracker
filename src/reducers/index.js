import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import optionsReducer from './options';
import trackerReducer from './tracker';

const reducer = combineReducers({
	options: optionsReducer,
	tracker: trackerReducer
});

const store = configureStore({
	reducer
});

export default store;