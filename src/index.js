import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

function formatName(user){
  return user.firstName + ' '  + user.lastName
}

function getGreeting(user){
  if (user){
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello,Stranger.</h1>
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (
<div>
  {getGreeting(user)}
  <h2>Good to see you here.</h2>
</div>);
root.render(element);

function tick(){
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  root.render(element)
}

setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
