import { useEffect, useRef, useState } from "react";
import { AddTaskIcon } from "../ui/icons";
import Modal from "../ui/Modal";
import SimpleBar from "simplebar-react";

const AddTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);

  const handleAddTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, input]);
    setInput("");
    // setIsAdding(false);
  };

  const [text, setText] = useState("");

  useEffect(() => {
    if (titleRef.current && titleRef.current.innerText !== text) {
      titleRef.current.innerText = text;
    }
  }, [text]);

  const handleInput = () => {
    const text = titleRef.current?.innerText || "";
    setText(text);
  };

  return (
    <>
      <button
        onClick={() => setIsAdding(true)}
        className="text-purple-600 bg-transparent flex items-center gap-2 px-3 py-1.5 rounded hover:bg-purple-600/5 transition-all duration-300"
      >
        <AddTaskIcon size={18} />
        <span className="">Add Task</span>
      </button>

      {isAdding && (
        <Modal isOpen={isAdding} onClose={() => setIsAdding(false)}>
          <div className="p-6 w-full h-full">
            <SimpleBar style={{maxHeight: 200}}>
              <div
                ref={titleRef}
                className="w-full h-fit overflow-y-auto outline-none py-1 whitespace-pre-wrap wrap-break-word empty:before:content-[attr(data-placeholder)] empty:before:text-neutral-300"
                contentEditable
                onInput={handleInput}
                data-placeholder="This is a test..."
              />
              <div
                ref={titleRef}
                className="w-full h-fit overflow-y-auto outline-none py-1 whitespace-pre-wrap wrap-break-word empty:before:content-[attr(data-placeholder)] empty:before:text-neutral-500 text-neutral-400 text-sm"
                contentEditable
                onInput={handleInput}
                data-placeholder="description"
              />
            </SimpleBar>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddTask;
