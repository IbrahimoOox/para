import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUpForm from './SignUpForm';

const App = () => {
  return (
    <div>
      <h1>Inscription</h1>
      <SignUpForm />
    </div>
  );
};

export default App;