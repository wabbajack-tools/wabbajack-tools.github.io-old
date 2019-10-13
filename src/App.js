import React from 'react';
import './App.css';
import Copyright from './components/Copyright';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
    <Album/>
      <footer className="footer">
      <Copyright/>
      </footer>
    </div>
  );
}

export default App;
