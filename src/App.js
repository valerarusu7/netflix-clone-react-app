import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Series from "./components/Pages/SeriesPage/Series";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/series" component={Series} />
          <Route path="/films" component={Series} />
          <Route path="/latest" component={Series} />
          <Route path="/my-list" component={Series} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
