import { SearchIcon, UserGroupIcon } from "../../ui/icons";
import AddTask from "../../tasks/AddTask";

const QuickActions = () => {
  return (
    <div className="flex flex-col gap-0.5 shrink-0 pb-2 border-b border-neutral-700">
      <AddTask />

      <button className="bg-transparent text-neutral-500 hover:bg-neutral-800/10 hover:text-inherit flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300">
        <UserGroupIcon size={18} />
        <span className="">Add Team</span>
      </button>

      <button className="bg-transparent text-neutral-500 hover:bg-neutral-800/10 hover:text-inherit flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300">
        <SearchIcon size={18} />
        <span className="">Search</span>
      </button>
    </div>
  );
};

export default QuickActions;
