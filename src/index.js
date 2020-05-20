import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

export default function Index() {
  return (
    <>
      <App />
    </>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'))