import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div><Button type="primary">Button</Button></div>
      </header>
    </div>
  );
};

export default App;
