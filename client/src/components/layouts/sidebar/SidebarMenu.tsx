import { NavLink } from 'react-router-dom';
import { FavoriteIcon, FilterAndLabelIcon, InboxIcon, ReportIcon, TodayIcon, UpcomingIcon } from '../../ui/icons';

const SidebarMenu = () => {
  return (
    <nav className="flex flex-col gap-1">
      <NavLink
        to="/inbox"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-[#1D1722] hover:text-purple-600 hover:bg-purple-600/10 sticky top-0 left-0" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
        }
      >
        <InboxIcon size={18} />
        <span className="">Inbox</span>
      </NavLink>
      <NavLink
        to="/today"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-[#1D1722] hover:text-purple-600 hover:bg-purple-600/10 sticky top-0 left-0" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
        }
      >
        <TodayIcon size={18} />
        <span className="">Today</span>
      </NavLink>
      <NavLink
        to="/upcoming"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-[#1D1722] hover:text-purple-600 hover:bg-purple-600/10 sticky top-0 left-0" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
        }
      >
        <UpcomingIcon size={18} />
        <span className="">Upcoming</span>
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-[#1D1722] hover:text-purple-600 hover:bg-purple-600/10 sticky top-0 left-0" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
        }
      >
        <FavoriteIcon size={18} />
        <span className="">Favorites</span>
      </NavLink>
      <NavLink
        to="/filters-labels"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-[#1D1722] hover:text-purple-600 hover:bg-purple-600/10 sticky top-0 left-0" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
        }
      >
        <FilterAndLabelIcon size={18} />
        <span className="">Filters & Labels</span>
      </NavLink>
      <NavLink
        to="/reporting"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-purple-600 bg-[#1D1722] hover:text-purple-600 hover:bg-purple-600/10 sticky top-0 left-0" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
        }
      >
        <ReportIcon size={18} />
        <span className="">Reporting</span>
      </NavLink>
    </nav>
  );
}

export default SidebarMenu