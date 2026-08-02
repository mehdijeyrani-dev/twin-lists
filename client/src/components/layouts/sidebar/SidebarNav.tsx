import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import SidebarProjects from "./SidebarProjects";
import SidebarTeams from "./SidebarTeams";
import SidebarMenu from "./SidebarMenu";

const SidebarNav = () => {
  return (
    <div className="flex-1 min-h-0">
      <SimpleBar className="h-full">
        <div className="flex flex-col gap-6">
          <SidebarMenu />
          <SidebarProjects />
          <SidebarTeams />
        </div>
      </SimpleBar>
    </div>
  );
};

export default SidebarNav;
