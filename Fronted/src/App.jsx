import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register";
const App = () => {
  return (
    <Router>
     <div>
      <Routes>
        <Route path="/" element={<Register />}></Route>
      </Routes>
     </div>
    </Router>
  );
};

export default App;
