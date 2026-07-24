import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useUIStore } from "../../store/useUIStore";

const MainLayout = () => {
  const isCollapsed = useUIStore((state) => state.isCollapsed);

  return (
    <div className="w-full h-dvh flex">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 p-2 ${isCollapsed ? "ml-0" : "ml-80"}`}
      >
        <header className="w-full h-12 bg-neutral-800/10 border border-neutral-800 rounded-md flex items-center justify-end p-2 shadow-lg">
          <button className="text-sm bg-neutral-800 px-2 py-1 rounded">
            Comment
          </button>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
