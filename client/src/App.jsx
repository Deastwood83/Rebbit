import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const Home = () => {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
