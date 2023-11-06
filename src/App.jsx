import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import Broadcast from "./components/Broadcast";
import CreateBroad from "./components/CreateBroad";
import UpdateBroad from "./components/UpdateBroad";


function App() {
  return (
    <Router>
      <div>
        <h2 className="heading">
          <a href="/">TodoList</a>
          <div className="broad__btn">
            <Link to="/create-broad" className="btn btn-info btn-sm">Create broad</Link>
          </div>
        </h2>
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__title">QLDA - Todolist - nhan</div>
            <nav className="nav flex-column sidebar__menu">
              <Link to="/broad" className="nav-link sidebar__link"><i className="sidebar__link-icon fas fa-book"></i>Broad</Link>
              <Link to="/list" className="nav-link sidebar__link"><i className="sidebar__link-icon far fa-list-alt"></i>List</Link>
            </nav>
          </div>
          <div className="content">
            <Routes>
              <Route path="/list" element={<TodoList />} />
              <Route path="/broad" element={<Broadcast />} />
              <Route path="/create-broad" element={<CreateBroad />} />
              <Route path="/update-broad" element={<UpdateBroad />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;