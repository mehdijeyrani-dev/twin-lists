import Sidebar from "./sidebar/Sidebar";
import ContentShell from "./ContentShell";

const MainLayout = () => {

  return (
    <div className="w-full h-dvh flex overflow-hidden relative">
      <Sidebar />
      <ContentShell />
    </div>
  );
};

export default MainLayout;
