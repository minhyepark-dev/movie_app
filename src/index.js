import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 리액트는 한번에 하나의 컴포넌트만 렌더링 할 수 있다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
