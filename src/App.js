import React from 'react';
import UserManagement from './Components/UserManagement/UserManagement';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href=".">
          User Management
        </a>
        <a className="App-link" href=".">
          Quiz Management
        </a>        
        <a className="App-link" href=".">
          Take Quiz
        </a>         

      </header>
      <main>
        <UserManagement />
      </main>
    </div>
  );
}

export default App;
