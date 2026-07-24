import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Inbox from "./pages/Inbox";
import Today from "./pages/Today";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/inbox" replace />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="today" element={<Today />} />
        
        {/* <Route path="upcoming" element={<Upcoming />} />
        <Route path="filters-labels" element={<FiltersAndLabels />} />
        <Route path="reporting" element={<Report />} />
        <Route path="projects" element={<Projects />} />
        <Route path="teams" element={<Teams />} />
        <Route path="notifications" element={<Notifications />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
