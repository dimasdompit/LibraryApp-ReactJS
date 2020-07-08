import { combineReducers } from "redux";
import auth from "./auth";
import book from "./book";
import genre from "./genre";
import users from "./users";

export default combineReducers({ auth, book, genre, users });
