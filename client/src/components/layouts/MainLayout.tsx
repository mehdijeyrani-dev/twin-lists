import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useUIStore } from "../../store/useUIStore";

const MainLayout = () => {
  const isCollapsed = useUIStore((state) => state.isCollapsed);
  
  return (
    <div className="w-full h-dvh flex">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 ${isCollapsed ? "ml-0" : "ml-80"}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
