import { createStore, applyMiddleware } from "redux"
import { History } from "history"
import { routerMiddleware } from "connected-react-router"
import { createEpicMiddleware } from "redux-observable"

import { composeEnhancers } from "./utils"
import rootReducer from "./root-reducer"
import rootEpic from "./root-epic"

const configureStore = (history: History) => {
  const epicMiddleware = createEpicMiddleware()
  const middlewares = [routerMiddleware(history), epicMiddleware]
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(rootReducer(history), enhancer)

  epicMiddleware.run(rootEpic)

  return store
}
export default configureStore
