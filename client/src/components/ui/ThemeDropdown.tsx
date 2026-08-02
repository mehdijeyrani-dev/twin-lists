import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/Theme";
import { MoonIcon, SunIcon, SystemIcon } from "./icons";

const ThemeDropdown = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { theme, setTheme } = useTheme();

  const themeLabels = {
    light: { icon: <SunIcon size={16} className="mt-0.5" />, title: "Light" },
    dark: { icon: <MoonIcon size={16} className="mt-0.5" />, title: "Dark" },
    system: {
      icon: <SystemIcon size={16} className="mt-0.5" />,
      title: "System",
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2.5 bg-ui-bg px-2.5 py-1 rounded"
      >
        {themeLabels[theme].icon}{" "}
        <span className="text-sm font-light">{themeLabels[theme].title}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-36 rounded border border-neutral-700 shadow-lg">
          {(["light", "dark", "system"] as const).map((item) => (
            <button
              key={item}
              onClick={() => setTheme(item)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 bg-ui-bg`}
            >
              {themeLabels[item].icon} <span>{themeLabels[item].title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
