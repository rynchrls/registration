import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import LoginSuccess from "./Components/loginSuccess";

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* It will show up when logging in using google waas successfull */}
        <Route path="/success" element={<LoginSuccess />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
