import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './redux/Store' // Getting access to the store fnx
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Now redux can be used through out the application for managing the state of the application */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
