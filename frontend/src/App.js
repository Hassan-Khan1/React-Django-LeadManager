import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import Books from './components/Login/books';
function App() {

  const [token, setToken] =  useState('');
  const userLogin = (token) => {
    setToken(token); 
    console.log('Token..',token);
  }


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LoginPage  userLogin = { userLogin } />
      <Books token={ token } />
    </div>
  );
}

export default App;
