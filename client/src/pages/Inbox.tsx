import React, { useRef, useState } from "react";
import { DiamondIcon } from "../components/ui/icons";
import TaskCard from "../components/ui/TaskCard";

const Inbox = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!containerRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;

    e.preventDefault();

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="h-full w-full flex flex-col gap-2">
      <div className="w-full h-10"></div>
      <div
        className="w-full flex-1 flex gap-2 overflow-x-auto px-2 pb-2 cursor-grab active:cursor-grabbing select-none"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
                14
              </span>
            </div>
            <button>
              <DiamondIcon size={16} />
            </button>
          </div>
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-2 px-2 scrollbar-none hover:scrollbar-thin">
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
