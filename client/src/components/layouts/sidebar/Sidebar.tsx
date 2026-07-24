import { NavLink } from "react-router-dom";
import { useUIStore } from "../../../store/useUIStore";
import {
  AddTaskIcon,
  ArrowRightIcon,
  FavoriteIcon,
  FilterAndLabelIcon,
  HashIcon,
  InboxIcon,
  LogoutIcon,
  ReportIcon,
  SearchIcon,
  SettingIcon,
  TeamIcon,
  TodayIcon,
  UpcomingIcon,
  UserGroupIcon,
} from "../../ui/icons";
import SidebarToggle from "./SidebarToggle";
import UserInfo from "./UserInfo";
import BranchConnector from "../../ui/BranchConnector";

const Sidebar = () => {
  const isCollapsed = useUIStore((state) => state.isCollapsed);

  return (
    <aside
      className={`w-full h-full md:w-80 border-r border-neutral-800 absolute top-0 left-0 bg-neutral-900 transition-all duration-300 flex flex-col gap-2 p-2
             ${isCollapsed ? "-translate-x-full" : "translate-x-0"}`}
    >
      <div className="w-full h-12 flex items-center justify-between p-2 bg-neutral-800/10 border border-neutral-800 rounded-md shadow-lg shrink-0">
        <UserInfo />
        <SidebarToggle />
      </div>
      <div className="flex flex-col gap-0.5 shrink-0">
        <button className="text-purple-600 bg-transparent flex items-center gap-2 px-3 py-1.5 rounded hover:bg-purple-600/5 transition-all duration-300">
          <AddTaskIcon size={18} />
          <span className="">Add Task</span>
        </button>

        <button className="bg-transparent text-neutral-500 hover:bg-neutral-800/10 hover:text-inherit flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300">
          <UserGroupIcon size={18} />
          <span className="">Add Team</span>
        </button>

        <button className="bg-transparent text-neutral-500 hover:bg-neutral-800/10 hover:text-inherit flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300">
          <SearchIcon size={18} />
          <span className="">Search</span>
        </button>
      </div>
      <hr className="border-neutral-800" />
      <div className="flex flex-col gap-1 overflow-y-auto">
        <nav className="flex flex-col gap-1">
          <NavLink
            to="/inbox"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-purple-600/5 hover:text-purple-600 hover:bg-purple-600/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <InboxIcon size={18} />
            <span className="">Inbox</span>
          </NavLink>
          <NavLink
            to="/today"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-purple-600/5 hover:text-purple-600 hover:bg-purple-600/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <TodayIcon size={18} />
            <span className="">Today</span>
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-purple-600/5 hover:text-purple-600 hover:bg-purple-600/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <UpcomingIcon size={18} />
            <span className="">Upcoming</span>
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-purple-600/5 hover:text-purple-600 hover:bg-purple-600/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <FavoriteIcon size={18} />
            <span className="">Favorites</span>
          </NavLink>
          <NavLink
            to="/filters-labels"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-purple-600/5 hover:text-purple-600 hover:bg-purple-600/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <FilterAndLabelIcon size={18} />
            <span className="">Filters & Labels</span>
          </NavLink>
          <NavLink
            to="/reporting"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-purple-600/5 hover:text-purple-600 hover:bg-purple-600/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <ReportIcon size={18} />
            <span className="">Reporting</span>
          </NavLink>
        </nav>
        <nav className="flex flex-col gap-1 mt-4">
          <NavLink
            to="/projects"
            className="flex items-center justify-between pl-2"
          >
            <span className="text-neutral-300">My Projects</span>
            <button className="p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition-all duration-300">
              <ArrowRightIcon size={18} strokeWidth={1} />
            </button>
          </NavLink>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector stroke="#737373" />
            <HashIcon size={18} className="text-green-600" />
            <span className="">test</span>
          </NavLink>
          <NavLink
            to="/react"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector variant="long" stroke="#737373" />
            <HashIcon size={18} className="text-rose-600" />
            <span className="">react</span>
          </NavLink>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector variant="long" stroke="#737373" />
            <span className="">+4 more</span>
          </NavLink>
        </nav>
        <nav className="flex flex-col gap-1 mt-4">
          <NavLink
            to="/teams"
            className="flex items-center justify-between pl-2"
          >
            <span className="text-neutral-300">My Teams</span>
            <button className="p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition-all duration-300">
              <ArrowRightIcon size={18} strokeWidth={1} />
            </button>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector stroke="#737373" />
            <TeamIcon size={18} className="text-blue-600 shrink-0" />
            <span className="line-clamp-1">
              rash is okay is not okay so this is okay
            </span>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector variant="long" stroke="#737373" />
            <TeamIcon size={18} className="text-amber-400 shrink-0" />
            <span className="">rash</span>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector variant="long" stroke="#737373" />
            <TeamIcon size={18} className="text-lime-600" />
            <span className="">rash</span>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector variant="long" stroke="#737373" />
            <TeamIcon size={18} className="text-rose-500" />
            <span className="">rash</span>
          </NavLink>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `relative ml-9 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <BranchConnector variant="long" stroke="#737373" />
            <span className="">+4 more</span>
          </NavLink>
        </nav>
      </div>
      <div className="shrink-0 flex flex-col mt-auto">
        <button className="bg-transparent text-neutral-500 hover:bg-neutral-800/10 hover:text-inherit flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300">
          <SettingIcon size={18} />
          <span className="">Settings</span>
        </button>
        <button className="bg-transparent text-rose-500 hover:bg-rose-500/5 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300">
          <LogoutIcon size={18} />
          <span className="">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
