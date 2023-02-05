import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl isLoggedIn={true} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
