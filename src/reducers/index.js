import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


//combineReducers() takes an object as an argument. That object contains key-value pairs. 
//The key represents the state slice while the value represents the reducer that handles actions related to that state slice.
const rootReducer = combineReducers({
  firestore: firestoreReducer
});

export default rootReducer;