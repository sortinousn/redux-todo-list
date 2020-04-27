import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoList from "./components/Todolist";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div>
          <Navbar />
          <TodoList />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
