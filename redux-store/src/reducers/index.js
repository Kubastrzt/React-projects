import LoginReducer from "./LoginReducer";
import Reducer from "./Reducer";
import LoggedReducer from "./LoggedReducer";
import Favo from "./FavouriteReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: LoginReducer,
    cart: Reducer,
    favs: Favo,
    logged: LoggedReducer
})

export default allReducers