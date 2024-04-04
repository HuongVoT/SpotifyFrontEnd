import { createStore } from 'redux';
import { songReducer } from './songSlice';

const store = createStore(songReducer);

export default store;
