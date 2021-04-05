import App from './App';
import React from 'react';

// react-snap

import { hydrate, render } from "react-dom";
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}


// react-snapshot

// import { render } from 'react-snapshot';
// render(
//     <App/>,
//     document.getElementById('root')
//   );