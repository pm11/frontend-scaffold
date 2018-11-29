import { combineReducers } from "redux"
import { History } from "history"
import { RouterState, connectRouter } from "connected-react-router"

import { countersReducer } from "../features/counters"

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    counters: countersReducer
  })
export default rootReducer
