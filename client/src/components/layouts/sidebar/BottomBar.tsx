import { LogoutIcon, SettingIcon } from "../../ui/icons";

const BottomBar = () => {
  return (
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
  );
};

export default BottomBar;
