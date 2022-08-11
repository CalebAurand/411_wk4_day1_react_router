import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
// Write imports for Router & BrowserRouter here //
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
