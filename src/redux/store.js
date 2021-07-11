import { createStore, combineReducers } from "redux";
import notesReducer from "./notes/notesReducer";

const rootReducer = combineReducers({ notesReducer });

const store = createStore(rootReducer);

export default store;
