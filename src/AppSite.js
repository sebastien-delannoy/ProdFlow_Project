import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteList from "./routes/SiteList";
import AddSite from "./routes/AddSite";
import EditSite from "./routes/EditSite";

function AppSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteList />} />
        <Route path="add" element={<AddSite />} />
        <Route path="edit/:id" element={<EditSite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppSite;
