import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const state={
  age:"blank"
}

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
registerServiceWorker();
