import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from './App.jsx'
import 'antd/dist/antd.less'
import { rootReducer } from './store/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
