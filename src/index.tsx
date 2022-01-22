import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
require('dotenv').config();

if (process.env.REACT_APP_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://4102e25d5a3a4745825cf5f22b09ebfc@o1065447.ingest.sentry.io/6057145',
    integrations: [new Integrations.BrowserTracing()],
    normalizeDepth: 10,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
