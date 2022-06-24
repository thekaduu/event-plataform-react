
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import { client } from './lib/apollo';
import { store } from './redux/store';
import App from './App'

import './styles/global.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
