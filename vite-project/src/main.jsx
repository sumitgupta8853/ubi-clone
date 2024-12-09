import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './components/redux/Store.jsx' // Corrected the case
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './App.jsx';
// import { Provider } from 'react-redux';
// import { store } from './components/redux/Store.jsx'; // Ensure correct path and casing
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );



