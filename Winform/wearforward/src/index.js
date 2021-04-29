import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

//architecture
//(from src)
// => components, constants, context, helpers, lib, db (firebase), services (firebase)
//tailwind styling
//folder structure
// -src
// * components
// * constants
// * context
// * helpers
// * lib
// * services
// * styles (tailwind = (app/tailwind))