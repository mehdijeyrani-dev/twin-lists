import { AddTaskIcon } from './icons';

const TaskCard = () => {
  return (
    <div className="px-4 py-3 w-full bg-neutral-800/50 rounded-xs border border-neutral-800 flex flex-col gap-3 shrink-0 snap-start snap-always">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div className="shrink-0">
            <div className="size-5 bg-rose-500/15 border border-rose-500 rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">
              Fix mobile layout overflow on task detail page
            </h2>
            <p className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-neutral-400 text-xs">
                <AddTaskIcon size={16} />
                <span>Aug 18, 1990</span>
              </span>
              <span className="flex items-center gap-1 text-neutral-400 text-xs">
                <AddTaskIcon size={16} />
                <span>3/4</span>
              </span>
              <span className="flex items-center gap-1 text-rose-500 text-xs">
                <AddTaskIcon size={16} />
                <span>Low</span>
              </span>
            </p>
            <p className="flex items-center gap-1">
              <span className="text-green-500 bg-green-500/10 text-xs px-1 py-0.5 rounded">
                #ui
              </span>
              <span className="text-blue-500 bg-blue-500/10 text-xs px-1 py-0.5 rounded">
                #design
              </span>
              <span className="text-amber-500 bg-amber-500/10 text-xs px-1 py-0.5 rounded">
                #responsive
              </span>
            </p>
            <span className="text-xs font-semibold text-neutral-400">
              Inbox
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-neutral-400">Progress</span>
          <div className="w-full h-0.5 bg-neutral-800 relative line-progress" />
          <span className="text-xs text-neutral-400 ml-auto">75%</span>
        </div>
      </div>
      <hr className="border-neutral-800" />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="size-6 bg-green-500/15 flex items-center justify-center rounded-full text-sm border border-green-500">
            M
          </div>
          <div className="size-6 bg-[#401F27] flex items-center justify-center rounded-full text-sm border border-rose-500 -ml-2">
            S
          </div>
          <div className="size-6 bg-[#3F2231] flex items-center justify-center rounded-full text-sm border border-pink-500 -ml-2">
            L
          </div>
          <div className="size-6 bg-[#40311A] flex items-center justify-center rounded-full text-sm border border-amber-500 -ml-2">
            N
          </div>
          <div className="size-6 bg-[#373737] flex items-center justify-center rounded-full text-sm border border-neutral-300 -ml-2">
            +4
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400">Des 14, 2025</span>
          <div className="w-px h-4 bg-neutral-400" />
          <span className="flex items-center gap-1 text-neutral-400 text-xs">
            <AddTaskIcon size={16} />
            <span>4</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard