import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";

import Home from "./page/Home";
import Support from "./page/Support";
import Setting from "./page/Setting";
import Log from "./page/Log";

import SiteList from "./page/SiteList";
import AddSite from "./page/AddSite";
import EditSite from "./page/EditSite";
import LineList from "./page/LineList";
import AddLine from "./page/AddLine";
import EditLine from "./page/EditLine";
import CreateTicket from "./page/CreateTicket";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/home">Our activities</Link>
          <Link to="/">Our facilities</Link>
          <Link to="/support">Support</Link>
          <Link to="/setting">Settings</Link>
          <Link to="/connect">Login</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/connect" element={<Login />} />

          <Route path="/" element={<SiteList />} />
          <Route path="add" element={<AddSite />} />
          <Route path="addline" element={<AddLine />} />
          <Route path="edit/:id" element={<EditSite />} />
          <Route path="/lines/:id" element={<LineList />} />
          <Route path="/lines/:id/new" element={<AddLine />} />
          <Route path="/lines/:id/edit/:id" element={<EditLine />} />
          <Route path="/lines/:id/create" element={<CreateTicket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
