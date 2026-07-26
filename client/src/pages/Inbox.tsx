import { DiamondIcon } from "../components/ui/icons";
import TaskCard from "../components/ui/TaskCard";

const Inbox = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2">
      <div className="w-full h-10"></div>
      <div className="w-full flex-1 flex gap-2 overflow-x-auto px-2 pb-2">
        <div className="shrink-0 w-80 h-fit max-h-full flex flex-col rounded border border-transparent hover:border-neutral-600 transition-all duration-300 cursor-pointer py-2">
          <div className="w-full h-fit shrink-0 flex items-center justify-between px-2 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <span>Todo</span>
              <span className="text-xs text-neutral-400 p-1 bg-neutral-800 rounded">
                10
              </span>
            </div>
            <button>
              <DiamondIcon size={16} />
            </button>
          </div>
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-2 px-2 snap-y snap-mandatory">
            {Array.from({ length: 10 }).map((_, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        <div className="shrink-0 w-80 h-fit max-h-full flex flex-col rounded border border-transparent hover:border-neutral-600 transition-all duration-300 cursor-pointer py-2">
          <div className="w-full h-fit shrink-0 flex items-center justify-between px-2 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <span>Todo</span>
              <span className="text-xs text-neutral-400 p-1 bg-neutral-800 rounded">
                10
              </span>
            </div>
            <button>
              <DiamondIcon size={16} />
            </button>
          </div>
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-2 px-2 snap-y snap-mandatory">
            {Array.from({ length: 14 }).map((_, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        <div className="shrink-0 w-80 h-fit max-h-full flex flex-col rounded border border-transparent hover:border-neutral-600 transition-all duration-300 cursor-pointer py-2">
          <div className="w-full h-fit shrink-0 flex items-center justify-between px-2 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <span>Todo</span>
              <span className="text-xs text-neutral-400 p-1 bg-neutral-800 rounded">
                10
              </span>
            </div>
            <button>
              <DiamondIcon size={16} />
            </button>
          </div>
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-2 px-2 snap-y snap-mandatory">
            {Array.from({ length: 1 }).map((_, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        <div className="shrink-0 w-80 h-fit max-h-full flex flex-col rounded border border-transparent hover:border-neutral-600 transition-all duration-300 cursor-pointer py-2">
          <div className="w-full h-fit shrink-0 flex items-center justify-between px-2 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <span>Todo</span>
              <span className="text-xs text-neutral-400 p-1 bg-neutral-800 rounded">
                10
              </span>
            </div>
            <button>
              <DiamondIcon size={16} />
            </button>
          </div>
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-2 px-2 snap-y snap-mandatory">
            {Array.from({ length: 5 }).map((_, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        <div className="shrink-0 w-80 h-fit max-h-full flex flex-col rounded border border-transparent hover:border-neutral-600 transition-all duration-300 cursor-pointer py-2">
          <div className="w-full h-fit shrink-0 flex items-center justify-between px-2 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <span>Todo</span>
              <span className="text-xs text-neutral-400 p-1 bg-neutral-800 rounded">
                10
              </span>
            </div>
            <button>
              <DiamondIcon size={16} />
            </button>
          </div>
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-2 px-2  snap-y snap-mandatory">
            {Array.from({ length: 20 }).map((_, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
