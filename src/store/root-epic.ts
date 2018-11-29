import { combineEpics } from "redux-observable"

import epics from "../features/todos/epics"

export default combineEpics(todos)
