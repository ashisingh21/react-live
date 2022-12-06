import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";


function App() {


  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={8} category='general' country='in' />}> </Route>
            <Route exact path="/business" element={<News key="business" pageSize={8} category='business' country='in' />}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={8} category='general' country='in' />} ></Route>
            <Route exact path="/health" element={<News key="health" pageSize={8} category='health' country='in' />} ></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} category='entertainment' country='in' />} ></Route>
            <Route exact path="/science" element={<News key="science" pageSize={8} category='science' country='in' />} ></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={8} category='sports' country='in' />} ></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={8} category='technology' country='in' />} ></Route>
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
