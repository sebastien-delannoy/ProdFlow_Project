import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./routes/Navbar";
import Home from "./page/Home";
import Setting from "./page/Setting";
import ProductionSite from "./routes/Production_site";
import Page from "./routes/Page";
import SiteList from "./routes/SiteList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/production_site" element={<ProductionSite />} />
            <Route path="/page" element={<Page />} />
            <Route path="/list" element={<SiteList />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
