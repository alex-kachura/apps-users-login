import * as React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import App from './containers/App/App'

const middleware = [thunk]
const enhancers = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer, enhancers)

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
