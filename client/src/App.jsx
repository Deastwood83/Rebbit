import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom';

function App() {
  const Home = () => {
    return (
      <div className=" text-4xl sm:text-2xl  text-[#3C5233]">
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
