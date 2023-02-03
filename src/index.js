// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
import App from './components/App';

const rootElement = document.getElementById('root');

// create a root
const root = createRoot(rootElement);

//render app to root
root.render(<App />);


