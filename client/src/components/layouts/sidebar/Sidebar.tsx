import { useUIStore } from "../../../store/useUIStore";
import QuickActions from "./QuickActions";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  const isCollapsed = useUIStore((state) => state.isCollapsed);

  return (
    <aside
      className={`w-full h-full md:w-72 border-r border-neutral-800 absolute top-0 left-0 bg-neutral-900 transition-all duration-300 flex flex-col gap-2 p-2 shrink-0
             ${isCollapsed ? "-translate-x-full" : "translate-x-0"}`}
    >
      <TopBar />
      <QuickActions />
      <SidebarNav />
      <BottomBar />
    </aside>
  );
};

export default Sidebar;
