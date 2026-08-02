import { NavLink } from "react-router-dom";
import { AddIcon, ArrowRightIcon, HashIcon } from "../../ui/icons";
import { useState } from "react";

const projectsNav = [
  {
    id: "1",
    name: "typescript",
    color: "text-blue-500",
    to: "/projects/typescript",
  },
  {
    id: "2",
    name: "javascript",
    color: "text-yellow-500",
    to: "/projects/javascript",
  },
  { id: "3", name: "nodejs", color: "text-green-500", to: "/projects/nodejs" },
  { id: "4", name: "css", color: "text-sky-500", to: "/projects/css" },
  { id: "5", name: "html", color: "text-rose-500", to: "/projects/html" },
  {
    id: "6",
    name: "express",
    color: "text-purple-500",
    to: "/projects/express",
  },
  { id: "7", name: "mongodb", color: "text-lime-500", to: "/projects/mongodb" },
  { id: "8", name: "design", color: "text-pink-500", to: "/projects/design" },
];

const SidebarProjects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MAX_VISIBLE = 5;

  const visibleProjects = projectsNav.slice(0, MAX_VISIBLE);

  const remainingCount =
    projectsNav.length > MAX_VISIBLE ? projectsNav.length - MAX_VISIBLE : 0;

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`group flex items-center justify-between p-1 rounded hover:bg-neutral-800/20 ${isOpen ? "bg-neutral-800/20" : "bg-transparent"}`}
      >
        <NavLink to="/projects" className="pl-2 text-neutral-300 font-semibold">
          My Projects
        </NavLink>

        <div className="flex items-center gap-1">
          <button className="p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition opacity-0 group-hover:opacity-100">
            <AddIcon size={20} strokeWidth={1} />
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-1 rounded bg-transparent hover:bg-neutral-800 text-neutral-600 hover:text-inherit transition"
          >
            <ArrowRightIcon
              size={20}
              strokeWidth={1}
              className={`transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="ml-6 border-l border-neutral-800 flex flex-col gap-1">
          {visibleProjects.map((project) => (
            <NavLink
              key={project.id}
              to={project.to}
              className={({ isActive }) =>
                `ml-1 flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${isActive ? "text-neutral-100 bg-neutral-800/10" : "text-neutral-500 bg-transparent hover:bg-neutral-800/10 hover:text-inherit"}`
              }
            >
              <HashIcon size={18} className={project.color} />
              <span className="">{project.name}</span>
            </NavLink>
          ))}

          {remainingCount > 0 && (
            <NavLink
              to="/projects"
              className="ml-1 flex items-center gap-2 px-3 py-1.5 rounded text-neutral-500 hover:bg-neutral-800/10 hover:text-inherit transition"
            >
              <span className="text-sm">+{remainingCount} more</span>
            </NavLink>
          )}
        </nav>
      )}
    </div>
  );
};

export default SidebarProjects;
