
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'


const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r0wwcu0g7301z35zrhgpvy/master',
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
