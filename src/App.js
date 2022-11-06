
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Courses from "./page/Courses";
import SiteList from "./page/SiteList";
import AddSite from "./component/AddSite";
import Search from "./component/Search";
import List from "./component/List";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="courses">Courses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="sites">Sites</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/sites" element={<SiteList />}>
//             {/* <Route path="add" element={<AddSite />} /> */}
//             <Route path="search" element={<Search />} />
           
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
