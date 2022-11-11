import { createStore, combineReducers, applyMiddleware} from "redux";
import { productsReducer, categoryReducer, servicesReducer, userReducer, authReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    service: servicesReducer,
    user: userReducer,
    auth: authReducer

});

export default createStore(rootReducer, applyMiddleware(thunk));

