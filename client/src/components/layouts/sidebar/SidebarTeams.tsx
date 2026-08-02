import { NavLink } from "react-router-dom";
import { AddIcon, ArrowRightIcon, TeamIcon } from "../../ui/icons";
import { useState } from "react";

const SidebarTeams = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`hover:bg-neutral-800/20 flex items-center justify-between gap-1 px-1 rounded group transition-all duration-300 ${isOpenDropdown ? "bg-neutral-800/30" : "bg-transparent"}`}
      >
        <NavLink
          to="/teams"
          className="flex items-center justify-between py-2 pl-2 flex-1"
        >
          <span className="text-neutral-300">My Teams</span>
        </NavLink>
        <div className="flex items-center gap-1 my-1">
          <button className="p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition-all duration-300 opacity-0 group-hover:opacity-100">
            <AddIcon size={20} strokeWidth={1} />
          </button>
          <button
            onClick={() => setIsOpenDropdown((prev) => !prev)}
            className="p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition-all duration-300"
          >
            <ArrowRightIcon
              size={20}
              strokeWidth={1}
              className={`transition-all duration-75 ${isOpenDropdown ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </div>
      </div>
      {isOpenDropdown && (
        <nav className="border-l border-neutral-800 ml-6 mr-0 flex flex-col gap-1">
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `ml-1 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <TeamIcon size={18} className="text-blue-600 shrink-0" />
            <span className="line-clamp-1">
              rash is okay is not okay so this is okay
            </span>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `ml-1 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <TeamIcon size={18} className="text-amber-400 shrink-0" />
            <span className="">rash</span>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `ml-1 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <TeamIcon size={18} className="text-lime-600" />
            <span className="">rash</span>
          </NavLink>
          <NavLink
            to="/teams/rash"
            className={({ isActive }) =>
              `ml-1 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <TeamIcon size={18} className="text-rose-500" />
            <span className="">rash</span>
          </NavLink>
          <NavLink
            to="/teams/more"
            className={({ isActive }) =>
              `ml-1 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
            }
          >
            <span className="">+4 more</span>
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default SidebarTeams;
