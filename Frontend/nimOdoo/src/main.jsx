import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ApolloProvider } from '@apollo/client'
import apolloConfig from './apollo/apolloConfig.js'
import store from './redux/AppStore'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloConfig}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
