import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";
import authReducer from './store/reducers/auth';
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
   burgerBuilder: burgerBuilderReducer,
   order: orderReducer,
   auth: authReducer,
});

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk))
);

const app = (
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(
   <React.StrictMode>{app}</React.StrictMode>,
   document.getElementById("root")
);