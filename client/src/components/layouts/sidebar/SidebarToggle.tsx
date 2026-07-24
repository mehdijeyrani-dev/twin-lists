import { useShallow } from "zustand/shallow";
import { useUIStore } from "../../../store/useUIStore";
import { SidebarIcon } from "../../ui/icons";

const SidebarToggle = () => {
  const { isCollapsed, toggleCollapsed } = useUIStore(
    useShallow((state) => ({
      isCollapsed: state.isCollapsed,
      toggleCollapsed: state.toggleCollapsed,
    })),
  );

  return (
    <button
      className={`bg-neutral-900 p-1 rounded-md transition-all duration-300 hover:bg-neutral-800 ${isCollapsed ? "translate-x-16" : "translate-x-0"}`}
      onClick={toggleCollapsed}
    >
      <SidebarIcon className="text-neutral-500 hover:text-inherit transition-all duration-300" />
    </button>
  );
};

export default SidebarToggle;
