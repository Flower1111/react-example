import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./redux/reducers/articlesReducer";
import usersReducer from "./redux/reducers/usersReducer";
import photosReducer from "./redux/reducers/photosReducer";

const rootReducer = combineReducers({
    articles: articlesReducer,
    users: usersReducer,
    photos: photosReducer,
});

const store = configureStore(rootReducer);

export default store;