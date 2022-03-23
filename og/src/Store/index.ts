import { createStore, applyMiddleware } from "redux";
import rootReducers from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

//toda a aplicação tem acesso ao store
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
