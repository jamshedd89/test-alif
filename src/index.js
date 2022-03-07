import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostStore from './store/PostStore'; 


export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    post: new PostStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
