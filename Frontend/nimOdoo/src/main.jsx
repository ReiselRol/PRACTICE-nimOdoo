import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ApolloProvider } from '@apollo/client'
import apolloConfig from './apollo/apolloConfig.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloConfig}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
)
