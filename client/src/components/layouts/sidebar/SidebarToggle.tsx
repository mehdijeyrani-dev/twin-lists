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
      className={`p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition-all duration-300 ${isCollapsed ? "translate-x-15.5" : "translate-x-0"}`}
      onClick={toggleCollapsed}
    >
      <SidebarIcon size={20} className="" />
    </button>
  );
};

export default SidebarToggle;
