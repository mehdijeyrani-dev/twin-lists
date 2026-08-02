import UserInfo from "./UserInfo";
import SidebarToggle from "./SidebarToggle";

const TopBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between p-2 bg-neutral-800/10 border border-neutral-800 rounded-md shadow-lg shrink-0">
      <UserInfo />
      <SidebarToggle />
    </div>
  );
};

export default TopBar;
