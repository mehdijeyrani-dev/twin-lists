import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Inbox from "./pages/Inbox";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import FiltersAndLabels from "./pages/FiltersAndLabels";
import Report from "./pages/Report";
import Test from "./pages/Test";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectsLayout from "./pages/ProjectsLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="inbox" replace />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="today" element={<Today />} />

        <Route path="upcoming" element={<Upcoming />} />
        <Route path="filters-labels" element={<FiltersAndLabels />} />
        <Route path="reporting" element={<Report />} />
        <Route path="/projects" element={<ProjectsLayout />}>
          <Route index element={<Projects />} />
          <Route path=":slug" element={<ProjectDetails />} />
        </Route>
        <Route path="test" element={<Test />} />

        {/* <Route path="projects" element={<Projects />} /> */}
        <Route path="teams" element={<Teams />}>
          <Route path="more" element={<h1>Hello Mehdi</h1>} />
        </Route>
        {/* <Route path="notifications" element={<Notifications />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
