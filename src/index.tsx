import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { History, createBrowserHistory } from "history"

import { configureStore } from "./store"

const history: History = createBrowserHistory()
const store = configureStore(history)
const root = (
  <Provider store={store}>
    <ConnectedRouter history={history} />
  </Provider>
)

render(root, document.getElementById("root"))
