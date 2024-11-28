import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState("Это тестовый проект Сулимовай Ангелины Алексеевны");

  const changeGreeting = () => {
    setGreeting("Текст изменен!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
        <button onClick={changeGreeting}>Изменить текст</button>
      </header>
    </div>
  );
}

export default App;